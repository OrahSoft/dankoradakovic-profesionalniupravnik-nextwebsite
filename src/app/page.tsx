'use client';

import { ArticleCard } from '@components/ArticleCard';
import { useFetchArticles } from '@hooks/useFetchArticles';
import Loading from './loading';

export default function Home() {
  const { data: articles = [], isLoading, error } = useFetchArticles();

  if (isLoading) return <Loading />;
  if (error) return <div className="mt-4 text-center text-red">{error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-center text-4xl font-bold">Home Page</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles &&
          articles.length > 0 &&
          articles.map((article) => <ArticleCard key={article.id} article={article} />)}
      </div>
    </div>
  );
}
