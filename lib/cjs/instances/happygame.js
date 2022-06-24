"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var axiosBaseConfig_1 = __importDefault(require("../config/axiosBaseConfig"));
var happyGameInstance = axios_1.default.create(axiosBaseConfig_1.default);
exports.default = happyGameInstance;
