'use client';
import { ArticleCard } from '@components/ArticleCard';
import fetchArticles from '@hooks/fetchArticles';
import { Article } from '@typesAndInterfaces/article';
import { useEffect, useState } from 'react';
import Loader from '@components/ArticlesBlock/loader';
export const ArticlesBlock = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-center text-4xl font-bold">Articles</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
