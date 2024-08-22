"use client";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";
import React from "react";
import { makeClient } from "../apollo/client";

export function ApolloProvider({ children }: React.PropsWithChildren) {
  //this provides apollo client to all client components inside hierarchy
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
