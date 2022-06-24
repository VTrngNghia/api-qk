"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var happytime_1 = __importDefault(require("../../instances/happytime"));
var employee = {
    get: function (params) { return happytime_1.default.get("/employees"); }
};
exports.default = employee;
