import type { NextApiRequest, NextApiResponse } from 'next';

type Article = {
  id: number;
  title: string;
  excerpt: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Article[]>) => {
  res.status(200).json([
    {
      id: 1,
      title: 'Article 1',
      excerpt: `This is a short excerpt for article 1. ${process.env.TEST_VARIABLE || 'failed'}`,
    },
    { id: 2, title: 'Article 2', excerpt: 'This is a short excerpt for article 2.' },
    { id: 3, title: 'Article 3', excerpt: 'This is a short excerpt for article 3.' },
  ]);
};

export default handler;
