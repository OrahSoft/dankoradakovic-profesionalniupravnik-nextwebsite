export default function handler(req, res) {
  res.status(200).json([
    { id: 1, title: 'Article 1', excerpt: 'This is a short excerpt for article 1.' },
    { id: 2, title: 'Article 2', excerpt: 'This is a short excerpt for article 2.' },
    { id: 3, title: 'Article 3', excerpt: 'This is a short excerpt for article 3.' },
  ]);
}
