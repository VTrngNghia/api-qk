"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("./auth"));
var employee_1 = __importDefault(require("./employee"));
var happyTimeApi = {
    auth: auth_1.default,
    employee: employee_1.default,
};
exports.default = happyTimeApi;
