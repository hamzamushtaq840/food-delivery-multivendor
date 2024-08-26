'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import List from './List';
import SearchInput from './SearchInput';
import { LocateFixed } from 'lucide-react';
import useLocation from '@/hooks/useLocation';
import { Prediction, SearchBarProps } from '@/types';

const autocompleteService = { current: null as google.maps.places.AutocompleteService | null };
const placeDetailsService = { current: null as google.maps.places.PlacesService | null };

const SearchBar: React.FC<SearchBarProps> = ({ onLocationSelect }) => {
  const [query, setQuery] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [locationSelected, setLocationSelected] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { getCurrentLocation } = useLocation();

  const fetchPredictions = useDebouncedCallback((searchQuery: string) => {
    if (!autocompleteService.current || !searchQuery || locationSelected) return;

    let isActive = true;

    autocompleteService.current.getPlacePredictions(
      { input: searchQuery },
      (
        results: google.maps.places.AutocompletePrediction[] | null,
        status: google.maps.places.PlacesServiceStatus,
      ) => {
        if (isActive && status === google.maps.places.PlacesServiceStatus.OK && results) {
          const formattedPredictions = results.map((result) => ({
            description: result.description,
            place_id: result.place_id,
            structured_formatting: {
              main_text: result.structured_formatting.main_text,
              secondary_text: result.structured_formatting.secondary_text,
            },
          }));
          setPredictions(formattedPredictions);
        }
      },
    );

    return () => {
      isActive = false;
    };
  }, 300);

  const fetchPlaceDetails = (
    placeId: string,
    callback: (latitude: number, longitude: number) => void,
  ) => {
    if (placeDetailsService.current) {
      placeDetailsService.current.getDetails({ placeId }, (place, status) => {
        if (
          status === google.maps.places.PlacesServiceStatus.OK &&
          place &&
          place.geometry &&
          place.geometry.location
        ) {
          const location = place.geometry.location;
          callback(location.lat(), location.lng());
        } else {
          console.error('Place Details was not successful for the following reason:', status);
          callback(NaN, NaN);
        }
      });
    }
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setSelectedIndex(-1);
    setLocationSelected(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowUp':
        setSelectedIndex((prev) => (prev === -1 ? predictions.length - 1 : prev - 1));
        break;
      case 'ArrowDown':
        setSelectedIndex((prev) => (prev === predictions.length - 1 ? -1 : prev + 1));
        break;
      case 'Enter':
        if (selectedIndex !== -1) {
          const selected = predictions[selectedIndex];
          fetchPlaceDetails(selected.place_id, (lat, lng) => {
            setQuery(selected.description);
            setSelectedIndex(-1);
            setPredictions([]);
            setLocationSelected(true);
            onLocationSelect(lat, lng, selected.description);
          });
        }
        break;
    }
  };

  const handleClick = (prediction: Prediction) => {
    fetchPlaceDetails(prediction.place_id, (lat, lng) => {
      setQuery(prediction.description);
      setSelectedIndex(-1);
      setPredictions([]);
      setLocationSelected(true);
      onLocationSelect(lat, lng, prediction.description);
    });
  };

  const handleCurrentLocation = () => {
    getCurrentLocation((location) => {
      if (location) {
        setQuery(location.currentAddress);
        setSelectedIndex(-1);
        setPredictions([]);
        setLocationSelected(true);
        onLocationSelect(location.latitude, location.longitude, location.currentAddress);
      }
    });
  };

  useEffect(() => {
    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
      placeDetailsService.current = new window.google.maps.places.PlacesService(
        document.createElement('div'),
      );
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setPredictions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!locationSelected) {
      fetchPredictions(query);
    }
  }, [query, fetchPredictions, locationSelected]);

  useEffect(() => {
    if (selectedIndex !== -1) {
      const activeProduct = document.getElementById(`product-${selectedIndex}`);
      if (activeProduct) {
        activeProduct.scrollIntoView({
          block: 'nearest',
          inline: 'start',
          behavior: 'smooth',
        });
      }
    }
  }, [selectedIndex]);

  return (
    <div className="relative flex w-full flex-col" ref={containerRef}>
      <SearchInput
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
        placeholder="Enter Delivery Address"
      />
      <LocateFixed
        onClick={handleCurrentLocation}
        className="lucide-locate-fixed absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:text-blue-500"
      />
      {query && predictions.length > 0 && !locationSelected && (
        <List lists={predictions} selectedItemIndex={selectedIndex} handleClick={handleClick} />
      )}
    </div>
  );
};

export default SearchBar;
