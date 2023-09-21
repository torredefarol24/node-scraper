import { IScrapeParams } from "../bootstrap/interface";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { _getAds } from "./_getAds";

export async function scrapeTruckItem(params: IScrapeParams) {
	try {
		// Get Ads after scraping
		const { htmlParams } = params;
		const { adIdAttr } = htmlParams;
		const ads = await _getAds(params);

		// Retrieve truck properties
		const items = ads.map((item: any) => {
			let id = item.children[0].attribs[adIdAttr];
			let title = item.children[0].children[0].children[1].children[0].children[0].children[0].data;

			console.log("id", id);
			console.log("title", title);

			return {};
		});

		logger.info(successMessages.scrapeTruckItemDone);
		return items;
	} catch (err: any) {
		logger.error(`${errorMessages.scrapeTruckItemFailed} ${err}`);
	}
}
