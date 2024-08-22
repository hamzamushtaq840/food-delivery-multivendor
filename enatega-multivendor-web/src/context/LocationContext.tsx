// LocationContext.tsx
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
  } | null>(null);
  setKey(GOOGLE_MAP_API);

  const latLngToGeoString = async ({ latitude, longitude }: LatLng): Promise<string> => {
    try {
      const location = await fromLatLng(latitude, longitude);
      return location.results[0].formatted_address;
    } catch (error) {
      throw new Error('Failed to fetch address');
    }
  };

  const getCurrentLocation = (): void => {
    navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
      try {
        const location = await fromLatLng(latitude, longitude);
        setLocation({
          latitude,
          longitude,
          currentAddress: location.results[0].formatted_address,
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <LocationContext.Provider
      value={{ location, setLocation, latLngToGeoString, getCurrentLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
