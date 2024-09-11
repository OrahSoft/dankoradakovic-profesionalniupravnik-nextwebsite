// 'use client';

import { Article } from '@typesAndInterfaces/article';
import { ArticleCard } from '@components/ArticleCard';
export const ArticlesBlock = async ({ articles = [] }: { articles?: Article[] }) => {
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
