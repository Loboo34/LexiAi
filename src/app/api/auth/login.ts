import { NextApiRequest, NextApiResponse } from 'next';
import { loginUser } from '@/server/services/authServices';

export async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}