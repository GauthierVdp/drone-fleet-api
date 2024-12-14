"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Get the JWT secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', ''); // Extract token from Authorization header
    if (!token) {
        return res.status(403).json({ message: 'Access denied, no token provided.' });
    }
    try {
        const user = jsonwebtoken_1.default.verify(token, JWT_SECRET); // Verify the token
        req.user = user; // Assign the decoded user information to the 'user' property
        next(); // Proceed to the next middleware or route handler
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};
exports.authenticateToken = authenticateToken;
