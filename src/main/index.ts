import { Scraper } from "../bootstrap/scraper";
import { OTOMOTO_PARAMS } from "../config/scrapeParams";

const OtoMotoScraper = new Scraper(OTOMOTO_PARAMS);

export async function scrape() {
	try {
		const adCount = await OtoMotoScraper.getTotalAdsCount();
		console.log("Total AdCount", adCount);
		const items = await OtoMotoScraper.addItems();
		console.log("Items", items);
	} catch (err) {}
}
