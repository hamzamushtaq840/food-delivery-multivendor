'use client';
import { GOOGLE_MAP_API } from '@/config/constants';
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import Image from 'next/image';

const LIBRARIES: Libraries = ['places', 'drawing', 'geometry', 'visualization'];
const COLORS = {
  GOOGLE: '#dd4b39',
};
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
        className="flex h-[100vh] w-screen items-center justify-center bg-slate-500"
      >
        <Image src={'/loader.svg'} alt="loader" width={50} height={50} />
      </div>
    );

  return <>{children}</>;
}
