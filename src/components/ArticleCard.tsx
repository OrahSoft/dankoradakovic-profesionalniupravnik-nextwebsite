import type { Article } from 'src/types/article';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      <div className="p-4">
        <h2 className="mb-2 text-2xl font-bold">{article.title}</h2>
        <p className="text-gray-700">{article.excerpt}</p>
      </div>
      <div className="bg-primaryBlue p-2 text-center text-white">
        <button className="rounded px-4 py-2 hover:bg-blue-700">Read More</button>
      </div>
    </div>
  );
};
