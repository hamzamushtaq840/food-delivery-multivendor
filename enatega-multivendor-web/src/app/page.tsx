'use client';
import App from '@/components/app-section';
import Features from '@/components/features';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <App />
      <Features />
    </main>
  );
}
