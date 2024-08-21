import { gql } from "@apollo/client";
import { getConfiguration } from "./server";

export const GETCONFIGURATION = gql`
  ${getConfiguration}
`;
