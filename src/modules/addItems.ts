import { IScrapeParams } from "../bootstrap/interface";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { _getAds } from "./_getAds";

export async function addItems(params: IScrapeParams) {
	try {
		// Get Ads after scraping
		const { HTML_PARAMS } = params;
		const ads = await _getAds(params);

		// Retrieve urls & ids
		const items = ads.map((item: any) => {
			let id = item.children[0].attribs[HTML_PARAMS.AD_ID_ATTR];
			let url =
				item.children[0].children[0].children[1].children[0].children[0].attribs[
					HTML_PARAMS.AD_URL_ATTR
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
