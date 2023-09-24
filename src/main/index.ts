import { Scraper } from "../bootstrap/scraper";
import { initialScrapeURL, OTOMOTOParams } from "../config/scrapeParams";

const OTOMOTOScraper = new Scraper(OTOMOTOParams);

/**
 * MAIN MODULE for scraping
 */

export async function scrape() {
	try {
		const adCount = await OTOMOTOScraper.getTotalAdsCount(initialScrapeURL);
		console.log("Total AdCount", adCount);
		const items = await OTOMOTOScraper.addItems(initialScrapeURL);
		console.log("Items", items);
		const truckItems = await OTOMOTOScraper.scrapeTruck(initialScrapeURL);
		console.log("Truck Items", truckItems);
		const nextPageUrl = await OTOMOTOScraper.getNextPageUrl(initialScrapeURL);
		console.log("Next Page URL", nextPageUrl);
	} catch (err) {
		/**
		 * Implement RETRY MECHANISM here later
		 * Idea 1
		 *
		 * Push failed function into Queue or memory DB (Redis)
		 * Run a cron job that checks whether Queue is empty
		 * If Queue isn't empty, execute that function
		 * Upon getting a successful callback, remove from the queue
		 *
		 * Idea 2
		 * Implement PUBSUB so that on failure events
		 * The function that failed, gets called again
		 * Set maximum retryCount to avoid infinite loop
		 *
		 * Idea 3
		 * If this was an express.js app then
		 * use middleware for handling errors
		 */
	}
}
