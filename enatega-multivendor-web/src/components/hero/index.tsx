'use client';
import Button from '@/components/ui/Button';
import useLocation from '@/hooks/useLocation';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import SearchBar from '../autocomplete';
import Map from '../map/Map';

const Hero = () => {
  const { getCurrentLocation, location } = useLocation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = 'restaurant-list';

  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
    currentAddress: string;
  } | null>(null);

  const handleSearch = useDebouncedCallback((lat, lng) => {
    const params = new URLSearchParams(searchParams);
    params.set('latitude', lat.toString());
    params.set('longitude', lng.toString());
    router.push(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    getCurrentLocation(() => {});
  }, []);

  return (
    <div className="relative">
      <div className="absolute left-[50%] top-[60%] z-[30] flex w-[60%] -translate-x-[50%] -translate-y-[50%] items-center justify-center gap-4 rounded-lg bg-black p-4 sm:w-[80%] sm:flex-col md:flex-col">
        <SearchBar
          onLocationSelect={(lat, lng, description) =>
            setSelectedLocation({ latitude: lat, longitude: lng, currentAddress: description })
          }
        />
        <Button
          label="Find Restaurant"
          py={4}
          customClass="w-[30%] md:w-full sm:w-full"
          onClick={() => {
            if (selectedLocation) {
              handleSearch(selectedLocation.latitude, selectedLocation.longitude);
            } else {
              alert('Please select location');
            }
          }}
        />
      </div>
      <Map location={selectedLocation ? selectedLocation : location} />
    </div>
  );
};

export default Hero;
