"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const generateToken = (user) => {
    console.log('in generate token');
    const secretKey = process.env.SECRET_KEY || ''; // Provide a default value if SECRET_KEY is not found
    const userIdentifyer = {
        id: user.id,
        userName: user.userName,
        email: user.email,
    };
    console.log(secretKey);
    return jsonwebtoken_1.default.sign(userIdentifyer, secretKey, { expiresIn: '15d' });
};
exports.generateToken = generateToken;
const isAuth = (req, res, next) => {
    const secretKey = process.env.SECRET_KEY || '';
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7); // Bearer XXXXXX
        jsonwebtoken_1.default.verify(token, secretKey, (err, decode) => {
            if (err) {
                res.status(401).json({ message: 'Invalid Token' });
            }
            else {
                req.user = decode;
                next();
            }
        });
    }
    else {
        res.status(401).json({ message: 'No Token' });
    }
};
exports.isAuth = isAuth;
