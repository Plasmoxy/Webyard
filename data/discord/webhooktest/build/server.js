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
dotenv_1.default.config();
const app = express_1.default();
const devHook = process.env.devHook;
const sudnyHook = process.env.sudnyHook;
const jedloHook = process.env.jedloHook;
let jedloInterval;
let jedloLastUpdate = new Date(0);
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
app.listen(80, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Hooker listening on 80...");
    // 10 sekundovy checker co meria dni
    jedloInterval = setInterval(() => {
        let current = new Date();
        const diffTime = Math.abs(current.getTime() - jedloLastUpdate.getTime());
        const diffDays = (diffTime / (1000 * 60 * 60 * 24));
        if (diffDays >= 1) {
            console.log("ONE DAY HAS PASSED -> sending food.");
            jedloLastUpdate = current;
            postJedalnicek();
        }
    }, 1000);
}));
function postJedalnicek() {
    return __awaiter(this, void 0, void 0, function* () {
        const jdl = yield jedalnicekparse_1.scrapJedalnicek();
        const day = (new Date()).getDay();
        const jDen = jdl[day - 1];
        if (jDen) {
            // search images
            //const imgs: any = (await axios.get(encodeURI(`https://serpapi.com/search?q=${jDen.jedla[0]}&tbm=isch&ijn=0`))).data
            //console.log(imgs?.images_results[0]?.original)
            yield axios_1.default.post(jedloHook, {
                username: "DOBRU CHUC!",
                content: "===== Obed dnes (" + jDen.den + " - " + jDen.datum + ") =====\n" + jDen.jedla.reduce((a, x) => a + x + "\n", "") + "==========================\n",
            });
        }
    });
}
