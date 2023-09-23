import { Scraper } from "../bootstrap/scraper";
import { OTOMOTOParams } from "../config/scrapeParams";

const OTOMOTOScraper = new Scraper(OTOMOTOParams);

/**
 * MAIN MODULE for scraping
 */

export async function scrape() {
	try {
		const adCount = await OTOMOTOScraper.getTotalAdsCount();
		console.log("Total AdCount", adCount);

		const items = await OTOMOTOScraper.addItems();
		console.log("Items", items);

		const truckItems = await OTOMOTOScraper.scrapeTruck();
		console.log("Truck Items", truckItems);
	} catch (err) {
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
