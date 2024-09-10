'use server';

import { Article } from '@typesAndInterfaces/article';

const GET = async () => {
  // await 1 second before sending response
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json(
    [
      {
        id: '1',
        title: 'Article 1',
        excerpt: `This is a short excerpt for article 1. ${process.env.TEST_VARIABLE || 'failed'}`,
      },
      { id: '2', title: 'Article 2', excerpt: 'This is a short excerpt for article 2.' },
      { id: '3', title: 'Article 3', excerpt: 'This is a short excerpt for article 3.' },
    ] as Article[],
    { status: 200 }
  );
};

export { GET };
