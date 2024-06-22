"use strict";
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
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const db_1 = __importDefault(require("./db/db"));
const dotenv_1 = __importDefault(require("dotenv"));
class App {
    constructor(port) {
        this.port = port;
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.setting();
        this.middlewares();
        this.routes();
        this.errors();
    }
    setting() {
        this.app.set('port', this.port || process.env.PORT || 3000);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    middlewares() {
        this.app.use((0, morgan_1.default)("dev"));
    }
    routes() {
        this.app.use('/user', user_routes_1.default);
    }
    errors() {
        this.app.use((err, req, res, next) => {
            res.status(500).json({ message: err.message });
        });
    }
    connection() {
        db_1.default.sync().then(() => { console.log("Database synced successfully"); }).catch((err) => {
            console.log("Error on db connecting: ", err);
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection();
            yield this.app.listen(this.app.get('port'));
            console.log("server is running on port ", this.app.get('port'));
        });
    }
}
exports.App = App;
