import express from 'express';
import { login } from '../controllers/authController'; // Ensure this path is correct

const router = express.Router();

router.post('/login', login);  // POST request for login

export default router;
