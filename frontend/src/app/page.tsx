'use client'

import { useCountStore } from "@/store/useCountStore";

export default function Home() {
  const countStore = useCountStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold underline mb-4">Play with counter app</h1>
      <p className="mb-4">current count: {countStore.count}</p>
      <div className="flex gap-2 mb-4">
        <button onClick={countStore.increment} className="bg-blue-500 text-white px-4 py-2 rounded">Increment</button>
        <button onClick={countStore.decrement} className="bg-red-500 text-white px-4 py-2 rounded">Decrement</button>
        <button onClick={countStore.reset} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}