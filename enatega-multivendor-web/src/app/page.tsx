'use client';
import { GETCONFIGURATION } from '@/apollo/queries';
import Maps from '@/components/maps/Maps'; // This should work as Maps is a default export
import useLocation from '@/hooks/useLocation';
import { useSuspenseQuery } from '@apollo/client';
import { useEffect } from 'react';

export default function Home() {
  const { getCurrentLocation, location } = useLocation();
  console.log(location);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const { data } = useSuspenseQuery(GETCONFIGURATION, {
    fetchPolicy: 'network-only',
  });

  console.log(data);

  return (
    <main>
      <Maps />
    </main>
  );
}
