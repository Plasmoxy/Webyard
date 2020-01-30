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
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const jedalnicekparse_1 = require("./jedalnicekparse");
const postJedalnicek_1 = require("./postJedalnicek");
dotenv_1.default.config();
const app = express_1.default();
const devHook = process.env.devHook;
const sudnyHook = process.env.sudnyHook;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hooker root yes?");
}));
app.get("/relaydev/:msg", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield axios_1.default.post(devHook, {
        content: req.params.msg
    });
    res.send("Ok poslal som diky.");
}));
app.get("/relay/:msg", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield axios_1.default.post(sudnyHook, {
        content: req.params.msg
    });
    res.send("Ok poslal som diky.");
}));
app.get("/jedalnicek", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.send(jedalnicekparse_1.scrapJedalnicek()); }));
app.get("/postJedalnicek", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield postJedalnicek_1.postJedalnicek();
    res.status(200);
}));
app.listen(80, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Hooker listening on 80...");
}));
