"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.happyGame = exports.happyTime = void 0;
var axios_1 = __importDefault(require("axios"));
var EPlatform_1 = __importDefault(require("./config/EPlatform"));
var baseConfig = {
    timeout: 15000,
    headers: {
        platform: EPlatform_1.default.web
    },
};
exports.happyTime = axios_1.default.create(baseConfig);
exports.happyGame = axios_1.default.create(baseConfig);
var api = {
    happyTime: exports.happyTime,
    happyGame: exports.happyGame
};
exports.default = api;
