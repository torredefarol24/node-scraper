"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scraper = void 0;
const addItems_1 = require("../modules/addItems");
const getTotalAdsCount_1 = require("../modules/getTotalAdsCount");
const scrapeTruckItem_1 = require("../modules/scrapeTruckItem");
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
    async scrapeTruck() {
        return await (0, scrapeTruckItem_1.scrapeTruckItem)(this._params);
    }
}
exports.Scraper = Scraper;
