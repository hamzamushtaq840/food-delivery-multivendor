'use client';
import { RESTAURANTS } from '@/apollo/queries';
import { LocationDetails, NearByRestaurantsData } from '@/types';
import { useQuery } from '@apollo/client';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { mapStyles } from './mapStyles';

export const defaultMapContainerStyle = {
  width: '100%',
  height: '80vh',
};

const DEFAULT_MAP_ZOOM = 10;

const Map = ({ location }: { location: LocationDetails | null }) => {
  const variables = {
    longitude: null,
    latitude: null,
  };

  const { data } = useQuery<NearByRestaurantsData>(RESTAURANTS, {
    variables,
  });

  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        zoom={DEFAULT_MAP_ZOOM}
        center={{
          lat: location?.latitude || 33.6844,
          lng: location?.longitude || 73.0479,
        }}
        options={{
          styles: mapStyles,
          zoomControl: true,
          zoomControlOptions: {
            position: window.google.maps.ControlPosition.RIGHT_CENTER,
          },
        }}
      >
        {location && (
          <Marker
            position={{
              lat: location.latitude,
              lng: location.longitude,
            }}
            icon={'/marker.png'}
          />
        )}
        {data?.nearByRestaurants?.restaurants?.map((restaurant) => (
          <Marker
            key={restaurant._id}
            position={{
              lat: parseFloat(restaurant.location.coordinates[1]),
              lng: parseFloat(restaurant.location.coordinates[0]),
            }}
            title={restaurant.name}
            icon={'/rest-map-2.png'}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
