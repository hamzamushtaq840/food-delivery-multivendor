'use client';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-160px)] flex-col items-center justify-center gap-2">
      <Frown className="h-20 w-20 text-gray-400" />
      <p className="text-white">Something went wrong.</p>
    </div>
  );
}
