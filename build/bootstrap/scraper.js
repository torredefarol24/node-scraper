"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scraper = void 0;
const addItems_1 = require("../modules/addItems");
const getNextPageUrl_1 = require("../modules/getNextPageUrl");
const getTotalAdsCount_1 = require("../modules/getTotalAdsCount");
const scrapeTruckItem_1 = require("../modules/scrapeTruckItem");
class Scraper {
    constructor(scrapeParams) {
        this._params = scrapeParams;
    }
    async getTotalAdsCount(url) {
        return await (0, getTotalAdsCount_1.getTotalAdsCount)(url, this._params);
    }
    async addItems(url) {
        return await (0, addItems_1.addItems)(url, this._params);
    }
    async scrapeTruck(url) {
        return await (0, scrapeTruckItem_1.scrapeTruckItem)(url, this._params);
    }
    async getNextPageUrl(url) {
        return await (0, getNextPageUrl_1.getNextPageUrl)(url, this._params);
    }
}
exports.Scraper = Scraper;
