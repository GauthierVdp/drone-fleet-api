import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Get the JWT secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Middleware to authenticate the token
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from Authorization header

  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided.' });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET); // Verify the token
    req.user = user; // Assign the decoded user information to the 'user' property
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
