import { Scraper } from "../bootstrap/scraper";
import { OTOMOTOParams } from "../config/scrapeParams";

const OTOMOTOScraper = new Scraper(OTOMOTOParams);

export async function scrape() {
	try {
		// const adCount = await OTOMOTOScraper.getTotalAdsCount();
		// console.log("Total AdCount", adCount);
		// const items = await OTOMOTOScraper.addItems();
		// console.log("Items", items);
		const truckItems = await OTOMOTOScraper.scrapeTruck();
		console.log("Truck Items", truckItems);
	} catch (err) {}
}
