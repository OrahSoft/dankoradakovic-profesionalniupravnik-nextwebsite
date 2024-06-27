import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import ArticleCard from '@components/ArticleCard';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <Layout>
      <div className='container mx-auto p-4'>
        <h1 className='text-4xl font-bold text-center mb-8'>Home Page</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
