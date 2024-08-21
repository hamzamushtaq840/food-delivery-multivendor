import { GRAPGHQL_URL } from "@/config/constants";
import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPGHQL_URL,
    fetchOptions: { cache: "no-store" },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    connectToDevTools: true,
  });
}
