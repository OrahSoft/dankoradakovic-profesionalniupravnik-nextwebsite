import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Loader from '@components/ArticlesBlock/loader';
import fetchArticles from '@hooks/fetchArticles';
import { Article } from '@typesAndInterfaces/article';

const ArticlesBlock = dynamic(() => import('@components/ArticlesBlock').then((module) => module.ArticlesBlock), {
  suspense: true,
  ssr: false,
  loading: () => <Loader />,
});

export default async function Home() {
  const articles: Article[] = await fetchArticles();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-center text-4xl font-bold">Dobrošli</h1>
      <Suspense>{articles && articles.length > 0 && <ArticlesBlock articles={articles} />}</Suspense>
    </div>
  );
}
