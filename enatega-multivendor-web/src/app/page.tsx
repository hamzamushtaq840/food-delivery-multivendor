'use client';
import App from '@/components/app-section';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Hero />
      </div>
      <App />
    </main>
  );
}
