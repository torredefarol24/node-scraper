import { ITEMS_LIST_PARAMS } from "../config/scrapeParams";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { _getAds } from "./_getAds";

export async function addItems() {
	try {
		// Get Ads after scraping
		const ads = await _getAds();

		// Retrieve urls & ids
		const items = ads.map((item: any) => {
			let id = item.children[0].attribs[ITEMS_LIST_PARAMS.AD_ID_FROM_ARTICLE];
			let url =
				item.children[0].children[0].children[1].children[0].children[0].attribs[
					ITEMS_LIST_PARAMS.AD_URL_FROM_ANCHOR
				];
			return {
				id,
				url,
			};
		});

		logger.info(SUCCESS_MESSAGES.ADD_ITEMS_DONE);
		return items;
	} catch (err: any) {
		logger.error(`${ERROR_MESSAGES.ADD_ITEMS_FAILED} ${err}`);
	}
}
