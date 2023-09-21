"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrape = void 0;
const scraper_1 = require("../bootstrap/scraper");
const scrapeParams_1 = require("../config/scrapeParams");
const OTOMOTOScraper = new scraper_1.Scraper(scrapeParams_1.OTOMOTOParams);
async function scrape() {
    try {
        // const adCount = await OTOMOTOScraper.getTotalAdsCount();
        // console.log("Total AdCount", adCount);
        // const items = await OTOMOTOScraper.addItems();
        // console.log("Items", items);
        const truckItems = await OTOMOTOScraper.scrapeTruck();
        console.log("Truck Items", truckItems);
    }
    catch (err) { }
}
exports.scrape = scrape;
