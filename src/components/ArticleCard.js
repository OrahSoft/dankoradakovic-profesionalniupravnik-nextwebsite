const ArticleCard = ({ article }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-2'>{article.title}</h2>
        <p className='text-gray-700'>{article.excerpt}</p>
      </div>
      <div className='bg-blue-600 text-white text-center p-2'>
        <button className='hover:bg-blue-700 px-4 py-2 rounded'>Read More</button>
      </div>
    </div>
  );
};

export default ArticleCard;
