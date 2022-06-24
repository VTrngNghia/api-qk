"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EPlatform_1 = __importDefault(require("./enums/EPlatform"));
var axiosBaseConfig = {
    baseURL: "",
    timeout: 15000,
    headers: {
        platform: EPlatform_1.default.web
    },
};
exports.default = axiosBaseConfig;
