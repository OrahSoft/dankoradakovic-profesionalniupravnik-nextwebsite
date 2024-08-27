interface Article {
  title: string;
  excerpt: string;
}

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      <div className="p-4">
        <h2 className="mb-2 text-2xl font-bold">{article.title}</h2>
        <p className="text-gray-700">{article.excerpt}</p>
      </div>
      <div className="bg-blue-600 p-2 text-center text-white">
        <button className="rounded px-4 py-2 hover:bg-blue-700">Read More</button>
      </div>
    </div>
  );
};
