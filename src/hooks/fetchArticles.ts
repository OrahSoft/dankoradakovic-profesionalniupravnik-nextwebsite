type FetchedArticles = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchArticles = async () => {
  // await 1 second before sending response (delay triggers main page loader)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // fetch articles (delay triggers ArticlesBlock loader)
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=3', { next: { revalidate: 10 } });
  const data = await response.json();
  const articles = data.map((art: FetchedArticles) => ({ id: art.id + '', title: art.title, excerpt: art.body }));
  return articles;
};

export default fetchArticles;
