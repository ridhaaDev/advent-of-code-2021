"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const variable = "hello ridhaa";
const getIncreases = () => __awaiter(void 0, void 0, void 0, function* () {
    const file = yield promises_1.default.readFile('input.txt', { encoding: 'utf8' });
    // const numLines = file.split("\n").reduce((acc, curr) => {
    // }, 0)
    let numLines = 0;
    let prevDepth = -1;
    console.log([prevDepth]);
    for (let currVal of file.split("\n")) {
        const depth = Number(currVal);
        if (prevDepth == -1) { // first value
            prevDepth = depth;
            continue;
        }
        if (depth > prevDepth) {
            numLines++;
        }
        prevDepth = depth;
    }
    console.log(numLines);
});
getIncreases();
