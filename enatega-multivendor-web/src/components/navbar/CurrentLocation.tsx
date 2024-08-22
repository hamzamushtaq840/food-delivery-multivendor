'use client';
import React from 'react';
import { MapPin } from 'lucide-react';
import useLocation from '@/hooks/useLocation';

const CurrentLocation = () => {
  const { location } = useLocation();

  return (
    <div className="flex items-center justify-center gap-2">
      <MapPin className="h-5 w-5" />
      <span className="">{location?.currentAddress ?? 'No location'}</span>
    </div>
  );
};

export default CurrentLocation;
