'use client';
import { GoogleMap } from '@react-google-maps/api';
import { mapStyles } from './mapStyles';

export const defaultMapContainerStyle = {
  width: '100%',
  height: '80vh',
  borderRadius: '15px 0px 0px 15px',
};

const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'satellite',
};

const Maps = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        zoom={10}
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
