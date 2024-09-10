import { useQuery } from 'react-query';

import { Article } from '@typesAndInterfaces/article';

const fetchArticles = async () => {
  const response = await fetch('/api/articles', { next: { revalidate: 10 } });
  const data = await response.json();
  return data;
};

export const useFetchArticles = () => {
  return useQuery<Article[], Error>({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  });
};
