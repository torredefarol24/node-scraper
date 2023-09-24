import { IItem, IScrapeParams } from "../bootstrap/interface";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { _getAds } from "./_getAds";

/**
 * Function that fetches the url and the item id
 * from the ad list
 */

export async function addItems(scrapeUrl: string, params: IScrapeParams) {
	try {
		/** Get Ads after scraping */
		const { adIdAttr, adHrefAttr } = params;
		const { adsFound, ads }: any = await _getAds(scrapeUrl, params);

		/** 
		 * Case 1
		 * No ads found
		 * Return empty array
		 */
		if (!adsFound) {
			return [];
		}

		/**
		 * Case 2
		 * Ads exist, retrieve urls & ids
		 * Return list of ads
		 */
		const items = ads.map((item: any) => {
			let id = item.children[0].attribs[adIdAttr].trim();
			let url =
				item.children[0].children[0].children[1].children[0].children[0].attribs[adHrefAttr].trim();

			const _item: IItem = {
				id,
				url,
			};
			return _item;
		});

		logger.info(successMessages.addItemsDone);
		return items;
	} catch (err: any) {
		logger.error(`${errorMessages.addItemsFailed} ${err}`);
	}
}
