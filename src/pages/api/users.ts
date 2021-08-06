import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'marco' },
    { id: 2, name: 'ola' },
    { id: 3, name: 'ana' },
  ];

  return response.json(users);
};
