'use client';
import { RESTAURANTS } from '@/apollo/queries';
import Card from '@/components/card';
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
    skip: latitude === null || longitude === null,
  });

  return (
    <div className="my-10 flex flex-col gap-6 px-20">
      <h1 className="text-3xl font-bold">Results</h1>
      {loading ? (
        <Image src="/loader.svg" alt="loader" width={50} height={50} />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {data?.nearByRestaurants.restaurants.map((restaurant) => (
            <Card key={restaurant._id} name={restaurant.name} image={restaurant.image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
