"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scraper = void 0;
const addItems_1 = require("../modules/addItems");
const getTotalAdsCount_1 = require("../modules/getTotalAdsCount");
class Scraper {
    constructor(scrapeParams) {
        this._params = scrapeParams;
    }
    async getTotalAdsCount() {
        return await (0, getTotalAdsCount_1.getTotalAdsCount)(this._params);
    }
    async addItems() {
        return await (0, addItems_1.addItems)(this._params);
    }
}
exports.Scraper = Scraper;
