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
  getCurrentLocation: () => void;
}
