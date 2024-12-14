"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key'; // Secret key
// Fake user for testing
const user = {
    id: 1,
    email: 'user@example.com',
    password: 'password123',
};
const login = (req, res) => {
    const { email, password } = req.body;
    if (email === user.email && password === user.password) {
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h',
        });
        return res.status(200).json({ token });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
};
exports.login = login;
