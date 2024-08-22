// useLocation.tsx
import { useContext } from 'react';
import { LocationContext } from '@/context/LocationContext';

const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

export default useLocation;
