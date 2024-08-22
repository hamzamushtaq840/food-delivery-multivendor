'use client';

import { GOOGLE_MAP_API } from '@/config/constants';
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';

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

  if (!scriptLoaded) return <p>Map Script is loading ...</p>;

  return <>{children}</>;
}
