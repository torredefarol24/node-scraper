"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrape = void 0;
const scraper_1 = require("../bootstrap/scraper");
const scrapeParams_1 = require("../config/scrapeParams");
const OTOMOTOScraper = new scraper_1.Scraper(scrapeParams_1.OTOMOTOParams);
/**
 * MAIN MODULE for scraping
 */
async function scrape() {
    try {
        const adCount = await OTOMOTOScraper.getTotalAdsCount();
        console.log("Total AdCount", adCount);
        const items = await OTOMOTOScraper.addItems();
        console.log("Items", items);
        const truckItems = await OTOMOTOScraper.scrapeTruck();
        console.log("Truck Items", truckItems);
    }
    catch (err) {
        // Implement retry mechanism here later
        // Idea 1
        // Push failed function into Queue or memory DB (Redis)
        // Run a cron job that checks whether Queue is empty
        // If Queue isn't empty, execute that function
        // upon getting a successful callback, remove from the queue
        // Idea 2
        // Implement PUBSUB so that on failure events
        // The function that failed, gets called again
        // Set maximum retryCount to avoid infinite loop
    }
}
exports.scrape = scrape;
