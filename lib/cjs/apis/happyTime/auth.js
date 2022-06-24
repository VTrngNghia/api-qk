"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var happytime_1 = __importDefault(require("../../instances/happytime"));
var auth = {
    login: function (body) { return happytime_1.default.post("/auth/login", body); },
    logout: function () { return happytime_1.default.post("/auth/logout"); }
};
exports.default = auth;
