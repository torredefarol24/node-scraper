"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("./bootstrap");
const scrapeParams_1 = require("./config/scrapeParams");
const OtoMotoScraper = new bootstrap_1.Scraper(scrapeParams_1.OTOMOTO_PARAMS);
async function scrape() {
    try {
        const adCount = await OtoMotoScraper.getTotalAdsCount();
        console.log("Total AdCount", adCount);
        const items = await OtoMotoScraper.addItems();
        console.log("Items", items);
    }
    catch (err) { }
}
scrape();
