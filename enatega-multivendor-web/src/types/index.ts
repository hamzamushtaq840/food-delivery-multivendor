export interface LatLng {
  latitude: number
  longitude: number
}

export interface LocationDetails {
  latitude: number
  longitude: number
  currentAddress: string
}

export type LocationCallback = (error: string | null, location?: LocationDetails) => void
