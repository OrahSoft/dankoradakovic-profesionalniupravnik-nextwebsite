import { notFound } from 'next/navigation';

export default function ArticlePage({ params: { slug } }: { params: { slug: string } }) {
  if (!slug || slug === '100') return notFound();

  return <div>Article {slug}</div>;
}
