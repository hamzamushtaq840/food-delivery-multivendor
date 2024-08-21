"use client";
import { GETCONFIGURATION } from "@/apollo/queries";
import { useSuspenseQuery } from "@apollo/client";

export default function Home() {
  const { data } = useSuspenseQuery(GETCONFIGURATION);
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
