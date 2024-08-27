import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Handle POST request (e.g., logout logic)
    res.status(200).json({ message: 'Logout successful. Now setup your logout logic!' });
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
