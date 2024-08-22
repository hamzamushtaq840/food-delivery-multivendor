'use client'
import { RESTAURANTS } from '@/apollo/queries'
import { useSuspenseQuery } from '@apollo/client'

export default function Home() {
  // Default coordinates set to null
  const variables = {
    latitude: null,
    longitude: null
  }

  const { data } = useSuspenseQuery(RESTAURANTS, {
    variables,
    fetchPolicy: 'network-only'
  })

  console.log(data)

  return <main className="flex min-h-screen flex-col items-center justify-between p-24">Hello World</main>
}
