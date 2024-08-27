import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Logout successful \nNow setup your loguot logic!' });
};

export default handler;
