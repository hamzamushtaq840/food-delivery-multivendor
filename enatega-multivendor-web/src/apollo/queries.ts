import { gql } from '@apollo/client'
import { getConfiguration, restaurantList } from './server'

export const GETCONFIGURATION = gql`
  ${getConfiguration}
`

export const RESTAURANTS = gql`
  ${restaurantList}
`
