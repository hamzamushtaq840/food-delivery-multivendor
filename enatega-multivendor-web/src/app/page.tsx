'use client';
import { GETCONFIGURATION, RESTAURANTS } from '@/apollo/queries';
import Maps from '@/components/maps/Maps'; // This should work as Maps is a default export
import { MapProvider } from '@/provider/MapsProvider'; // This should work as MapProvider is a named export
import useLocation from '@/hooks/useLocation';
import { useSuspenseQuery } from '@apollo/client';
import { useEffect } from 'react';

export default function Home() {
  const { getCurrentLocation } = useLocation();

  useEffect(() => {
    const locationCallback = (error: any, data: any) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(data);
    };
    getCurrentLocation(locationCallback);
  }, []);

  const { data } = useSuspenseQuery(GETCONFIGURATION, {
    fetchPolicy: 'network-only',
  });

  console.log(data);

  return (
    <main>
      <MapProvider>
        <Maps />
      </MapProvider>
    </main>
  );
}
