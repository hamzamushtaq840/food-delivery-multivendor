import { GOOGLE_MAP_API } from '@/config/constants';
import { LatLng, LocationContextType } from '@/types';
import React, { createContext, ReactNode, useState } from 'react';
import { fromLatLng, setKey } from 'react-geocode';

export const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
    currentAddress: string;
  } | null>(() => {
    const storedLocation = sessionStorage.getItem('userLocation');
    return storedLocation ? JSON.parse(storedLocation) : null;
  });

  setKey(GOOGLE_MAP_API);

  const latLngToGeoString = async ({ latitude, longitude }: LatLng): Promise<string> => {
    try {
      const response = await fromLatLng(latitude, longitude);
      return response.results[0].formatted_address;
    } catch (error) {
      throw new Error('Failed to fetch address');
    }
  };

  const getCurrentLocation = (
    callback: (location: { latitude: number; longitude: number; currentAddress: string }) => void,
  ): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          try {
            const currentAddress = await latLngToGeoString({ latitude, longitude });
            const newLocation = {
              latitude,
              longitude,
              currentAddress,
            };
            setLocation(newLocation);
            sessionStorage.setItem('userLocation', JSON.stringify(newLocation));
            callback(newLocation);
          } catch (error) {
            console.error('Error fetching address:', error);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  return (
    <LocationContext.Provider
      value={{ location, setLocation, latLngToGeoString, getCurrentLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
