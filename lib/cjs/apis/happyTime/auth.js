"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var happyTime_1 = __importDefault(require("../../instances/happyTime"));
var auth = {
    login: function (body) { return happyTime_1.default.post("/auth/login", body); },
    logout: function () { return happyTime_1.default.post("/auth/logout"); }
};
exports.default = auth;
