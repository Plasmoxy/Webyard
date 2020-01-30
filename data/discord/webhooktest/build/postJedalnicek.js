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
const jedalnicekparse_1 = require("./jedalnicekparse");
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jedloHook = process.env.jedloHook;
const notifyRoleId = "672490037136588828";
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
                username: "Obed dnes (" + jDen.den + " - " + jDen.datum + ")",
                content: jDen.jedla.reduce((a, x) => a + x + "\n", "")
                    + "<@&" + notifyRoleId + ">",
            });
        }
    });
}
exports.postJedalnicek = postJedalnicek;
