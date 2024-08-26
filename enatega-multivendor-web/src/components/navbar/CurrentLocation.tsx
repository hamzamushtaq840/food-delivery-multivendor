'use client';
import useLocation from '@/hooks/useLocation';
import { MapPin } from 'lucide-react';

const CurrentLocation = () => {
  const { location } = useLocation();

  return (
    <div className="flex items-center justify-center gap-2 sm:hidden md:hidden">
      <MapPin className="h-5 w-5" />
      <span className="">{location?.currentAddress.slice(0, 40) ?? 'No location found'}</span>
    </div>
  );
};

export default CurrentLocation;
