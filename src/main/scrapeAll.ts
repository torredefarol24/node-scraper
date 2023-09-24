import { IPage } from "../bootstrap/interface";
import { Scraper } from "../bootstrap/scraper";
import { initialScrapeURL, OTOMOTOParams } from "../config/scrapeParams";
import { getAllPageUrls } from "../modules/_getAllPageUrls";

/** Initialize one instance of Scraper to follow Singleton Design Pattern */
const OTOMOTOScraper = new Scraper(OTOMOTOParams);

/**
 * MAIN MODULE for scraping all pages and ads
 */

export async function scrapeAll() {
	try {
		/**
		 * Get list of page urls from initial scraping url
		 * Implements getNextPageUrl() and getAllPageUrls()
		 */
		console.log("Scraping Started", initialScrapeURL);
		const urlList: any = await getAllPageUrls(initialScrapeURL, OTOMOTOParams);

		/**
		 * Get total ad count for initial scraping URL
		 * Implements getTotalAdsCount()
		 */
		const { totalAdCount }: any = await OTOMOTOScraper.getTotalAdsCount(initialScrapeURL);
		console.log("\nTotal ads :: getTotalAdsCount", totalAdCount);

		/**
		 * Scrapes All Pages & Ads
		 */
		urlList.map(async (item: IPage) => {
			/**
			 * Get Truck id/titles from page
			 * Implements addItems()
			 */
			const truckIdTitles = await OTOMOTOScraper.addItems(item.url);
			console.log("Truck Id/Titles", truckIdTitles);

			/**
			 * Get truck properties: id, title, price, power, mileage, registrationDate, productionDate
			 * Implements scrapeTruckItem()
			 */
			const truckItems = await OTOMOTOScraper.scrapeTruck(item.url);
			console.log("Truck Items", truckItems);

			/**
			 * Scraping from every url from the list that was
			 * retrieved from the initial scraping url
			 */
			console.log("\nScraping Complete", item.page, "\nURL", item.url);
		});
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
