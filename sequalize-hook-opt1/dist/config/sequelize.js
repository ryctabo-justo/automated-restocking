"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("../entities/user");
dotenv_1.default.config();
const POSTGRES_URI = process.env.POSTGRESQL_URI;
if (POSTGRES_URI === null || POSTGRES_URI === undefined) {
    throw Error('Environment variable POSTGRES_URI is required to init project');
}
const sequelize = new sequelize_typescript_1.Sequelize(POSTGRES_URI, { repositoryMode: true, models: [user_1.UserEntity], logging: false });
exports.default = sequelize;
