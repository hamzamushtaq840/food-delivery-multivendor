import { LatLng, LocationCallback } from '@/types'
import { fromLatLng, setKey } from 'react-geocode'

export default function useLocation() {
  setKey('AIzaSyCcm7_Wd7uvmC9YnYLu2JHGWPt6z1MaL1E')

  const latLngToGeoString = async ({ latitude, longitude }: LatLng): Promise<string> => {
    try {
      const location = await fromLatLng(latitude, longitude)
      return location.results[0].formatted_address
    } catch (error) {
      throw new Error('Failed to fetch address')
    }
  }

  const getCurrentLocation = (callback: LocationCallback): void => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const location = await fromLatLng(latitude, longitude)
          callback(null, {
            latitude,
            longitude,
            currentAddress: location.results[0].formatted_address
          })
        } catch (error) {
          callback(error instanceof Error ? error.message : 'An unknown error occurred')
        }
      },
      ({ message }) => {
        callback(message)
        console.log(message)
      }
    )
  }

  return {
    getCurrentLocation,
    latLngToGeoString
  }
}
