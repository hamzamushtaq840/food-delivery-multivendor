"use client";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";
import React from "react";
import { makeClient } from "../apollo/client";

export function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
