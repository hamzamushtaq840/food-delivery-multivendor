import { useState, useEffect } from 'react'

interface Location {
  latitude: number | null
  longitude: number | null
}

interface GeolocationError {
  message: string
}

export const useLocation = () => {
  const [location, setLocation] = useState<Location>({ latitude: null, longitude: null })
  const [error, setError] = useState<string | null>(null)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        },
        (err: GeolocationPositionError) => {
          setError(err.message)
        }
      )
    } else {
      setError('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    getLocation() // Get location at the start of the app
  }, [])

  return { location, error, getLocation }
}
