'use client';
import { ArticlesBlock } from '@components/ArticlesBlock';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-center text-4xl font-bold">Dobrošli</h1>
      <ArticlesBlock />
    </div>
  );
}
