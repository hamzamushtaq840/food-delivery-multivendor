'use client';
import { GoogleMap } from '@react-google-maps/api';
import { mapStyles } from './mapStyles';

export const defaultMapContainerStyle = {
  width: '100%',
  height: '80vh',
};

const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004,
};

const DEFAULT_MAP_ZOOM = 10;

const Maps = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        zoom={DEFAULT_MAP_ZOOM}
        center={{
          lat: 33.6844,
          lng: 73.0479,
        }}
        options={{
          styles: mapStyles,
          zoomControl: true,
          zoomControlOptions: {
            position: window.google.maps.ControlPosition.RIGHT_CENTER,
          },
        }}
      ></GoogleMap>
    </div>
  );
};

export default Maps;
