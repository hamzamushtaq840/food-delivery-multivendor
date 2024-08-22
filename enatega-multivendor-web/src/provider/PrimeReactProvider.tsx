import { PrimeReactProvider as PrimeProvider } from 'primereact/api';
import React from 'react';

export function PrimeReactProvider({ children }: React.PropsWithChildren) {
  return (
    <PrimeProvider value={{ unstyled: true, pt: {} }}>{children}</PrimeProvider>
  );
}
