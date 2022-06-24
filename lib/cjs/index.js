"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var happyTime_1 = __importDefault(require("./apis/happyTime"));
var happyGame_1 = __importDefault(require("./apis/happyGame"));
var api = {
    happyTimeApi: happyTime_1.default,
    happyGameApi: happyGame_1.default,
};
exports.default = api;
