"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrape = void 0;
const scraper_1 = require("../bootstrap/scraper");
const scrapeParams_1 = require("../config/scrapeParams");
const OtoMotoScraper = new scraper_1.Scraper(scrapeParams_1.OTOMOTO_PARAMS);
async function scrape() {
    try {
        const adCount = await OtoMotoScraper.getTotalAdsCount();
        console.log("Total AdCount", adCount);
        const items = await OtoMotoScraper.addItems();
        console.log("Items", items);
    }
    catch (err) { }
}
exports.scrape = scrape;
