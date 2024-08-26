export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface LocationDetails {
  latitude: number;
  longitude: number;
  currentAddress: string;
}

export type LocationCallback = (error: string | null, location?: LocationDetails) => void;

export interface LocationContextType {
  location: {
    latitude: number;
    longitude: number;
    currentAddress: string;
  } | null;
  setLocation: React.Dispatch<
    React.SetStateAction<{
      latitude: number;
      longitude: number;
      currentAddress: string;
    } | null>
  >;
  latLngToGeoString: (latLng: LatLng) => Promise<string>;
  getCurrentLocation: (
    callback: (location: { latitude: number; longitude: number; currentAddress: string }) => void,
  ) => void;
}

export interface Location {
  coordinates: [string, string];
}

export interface Restaurant {
  _id: string;
  name: string;
  location: Location;
  image: string;
}

export interface NearByRestaurantsData {
  nearByRestaurants: {
    restaurants: Restaurant[];
  };
}

export type Prediction = {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
};

export type SearchBarProps = {
  onLocationSelect: (latitude: number, longitude: number, description: string) => void;
};
