"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var happyTime_1 = __importDefault(require("../../instances/happyTime"));
var employee = {
    get: function (params) { return happyTime_1.default.get("/employees"); }
};
exports.default = employee;
