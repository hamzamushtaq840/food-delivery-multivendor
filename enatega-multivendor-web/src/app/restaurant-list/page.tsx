'use client';
import { RESTAURANTS } from '@/apollo/queries';
import Card from '@/components/card';
import CardSkeleton from '@/components/card/CardSkeleton';
import { NearByRestaurantsData } from '@/types';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const latitudeStr = searchParams.get('latitude');
  const longitudeStr = searchParams.get('longitude');
  const latitude = latitudeStr ? parseFloat(latitudeStr) : null;
  const longitude = longitudeStr ? parseFloat(longitudeStr) : null;

  const variables = {
    latitude,
    longitude,
  };

  const { loading, data } = useQuery<NearByRestaurantsData>(RESTAURANTS, {
    variables,
  });

  return (
    <div className="my-10 flex flex-col gap-6 px-20">
      <h1 className="text-3xl font-bold">Results</h1>
      {loading ? (
        <CardSkeleton />
      ) : (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2">
          {data?.nearByRestaurants.restaurants.map((restaurant) => (
            <Card key={restaurant._id} name={restaurant.name} image={restaurant.image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
