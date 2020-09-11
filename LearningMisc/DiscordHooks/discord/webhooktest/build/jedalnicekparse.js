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
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
exports.host = "https://www.eskoly.sk/komenskeho13li";
function scrapJedalnicek() {
    return __awaiter(this, void 0, void 0, function* () {
        const html = yield axios_1.default.get(exports.host);
        const $ = cheerio_1.default.load(html.data);
        const title = $("#ctl00_mainContent_Label2").text();
        const $trows = $("#ctl00_mainContent_tblFoodtable > tbody > tr").has("td[class=dayColumn]");
        let jedalnicek = [];
        $trows.each((i, rowElem) => {
            var _a, _b, _c, _d, _e, _f;
            const dayColumn = rowElem.children.find(c => { var _a; return ((_a = c.attribs) === null || _a === void 0 ? void 0 : _a.class) === "dayColumn"; });
            const foodCell = rowElem.children.find(c => { var _a; return ((_a = c.attribs) === null || _a === void 0 ? void 0 : _a.class) === "foodCell"; });
            const den = (_d = (_c = (_b = (_a = dayColumn) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.find(c => c.type === "text")) === null || _c === void 0 ? void 0 : _c.data, (_d !== null && _d !== void 0 ? _d : "chyba"));
            const datum = $(dayColumn)
                .find("span")
                .text();
            const jedla = (_f = (_e = foodCell) === null || _e === void 0 ? void 0 : _e.children.filter(c => c.type === "text").map(c => { var _a; return _a = c.data, (_a !== null && _a !== void 0 ? _a : "chyba"); }), (_f !== null && _f !== void 0 ? _f : []));
            jedalnicek.push({ den, datum, jedla });
        });
        return jedalnicek;
    });
}
exports.scrapJedalnicek = scrapJedalnicek;
