'use client';
import { GOOGLE_MAP_API, LIBRARIES } from '@/config/constants';
import { useJsApiLoader } from '@react-google-maps/api';
import Image from 'next/image';
import { ReactNode } from 'react';

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP_API as string,
    libraries: LIBRARIES,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded)
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src={'/loader.svg'} alt="loader" width={50} height={50} />
      </div>
    );

  return <>{children}</>;
}
