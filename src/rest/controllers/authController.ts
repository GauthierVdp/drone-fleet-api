import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key'; // Secret key

// Fake user for testing
const user = {
  id: 1,
  email: 'user@example.com',
  password: 'password123',
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};
