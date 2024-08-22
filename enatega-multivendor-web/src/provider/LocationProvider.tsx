'use client';
import { LocationProvider as Provider } from '@/context/LocationContext';
import React from 'react';

function LocationProvider({ children }: React.PropsWithChildren) {
  return <Provider>{children}</Provider>;
}

export default LocationProvider;
