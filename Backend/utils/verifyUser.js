
import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;  // Fix the syntax here
    if (!token) {
        return next(errorHandler(401, 'Unauthorized'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return next(errorHandler(401, 'Unauthorized'));
        }
        req.user = decoded;  // Assign decoded information to req.user
        next();
    });
};