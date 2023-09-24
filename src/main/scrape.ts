import { Scraper } from "../bootstrap/scraper";
import { initialScrapeURL, OTOMOTOParams } from "../config/scrapeParams";

/** Initialize one instance of Scraper to follow Singleton Design Pattern */
const OTOMOTOScraper = new Scraper(OTOMOTOParams);

/**
 * MAIN MODULE for scraping
 */

export async function scrape() {
	try {
		/**
		 * Begin scraping from initial URL
		 */

		console.log("\nScraping Started: ", initialScrapeURL);

		/**
		 * Get total ad count: Implements getTotalAdsCount()
		 */
		const { totalAdCount }: any = await OTOMOTOScraper.getTotalAdsCount(initialScrapeURL);
		console.log("\nTotal ads :: getTotalAdsCount", totalAdCount);

		/**
		 * Get Truck id/urls: Implements addItems()
		 */
		const truckIdUrls = await OTOMOTOScraper.addItems(initialScrapeURL);
		console.log("\nTruck id/urls :: addItems", truckIdUrls);

		/**
		 * Get truck properties: id, title, price, power, mileage, registrationDate, productionDate
		 * Implements scrapeTruckItem()
		 */
		const truckItems = await OTOMOTOScraper.scrapeTruck(initialScrapeURL);
		console.log("\nTruck items :: scrapeTruckItem", truckItems);

		/**
		 * Get next page url: Implements getNextPageUrl()
		 */
		const nextPageURL = await OTOMOTOScraper.getNextPageUrl(initialScrapeURL);
		console.log("\nNext page URL :: getNextPageUrl", nextPageURL);
	} catch (err) {}
}
