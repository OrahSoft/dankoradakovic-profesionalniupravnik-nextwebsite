import { useEffect, useState } from 'react';
import { Layout } from '@components/Layout';
import { ArticleCard } from '@components/ArticleCard';

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('/api/articles')
      .then((response) => response.json())
      .then((data: Article[]) => setArticles(data));
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="mb-8 text-center text-4xl font-bold">Home Page</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
