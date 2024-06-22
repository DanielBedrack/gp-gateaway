"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = exports.login = exports.signUp = void 0;
const users_1 = require("../models/users");
const bcrypt = __importStar(require("bcrypt"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const utils_1 = require("../utils");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield bcrypt.genSalt();
        let user = yield users_1.Users.create({
            userName: req.body.userName,
            email: req.body.email,
            password: yield bcrypt.hashSync(req.body.password, salt),
            salt: salt,
        });
        return res
            .status(200)
            .json({ message: 'User created successfully', data: user });
    }
    catch (err) {
        return res.status(500).json({ message: err });
    }
});
exports.signUp = signUp;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield users_1.Users.findOne({ where: { email: email } }); // 'where'  belonges to 'Sequalize'
    console.log('in login request');
    console.log(Object.assign({}, user));
    if (user && (yield bcrypt_1.default.compareSync(password, user.password))) {
        let userDto = {
            id: user.id,
            userName: user.userName,
            email: user.email,
            token: (0, utils_1.generateToken)(user),
        };
        return res.status(200).json({ data: userDto });
    }
});
exports.login = login;
const ping = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ data: 'pong' });
});
exports.ping = ping;
