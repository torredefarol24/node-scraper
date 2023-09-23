import { IItem, IScrapeParams } from "../bootstrap/interface";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { _getAds } from "./_getAds";

/**
 * Function that fetches the url and
 * the item id from the ad list
 */

export async function addItems(params: IScrapeParams) {
	try {
		// Get Ads after scraping
		const { htmlParams } = params;
		const { adIdAttr, adUrlAttr } = htmlParams;
		const { ads }: any = await _getAds(params);

		// Retrieve urls & ids
		const items = ads.map((item: any) => {
			let id = item.children[0].attribs[adIdAttr].trim();
			let url =
				item.children[0].children[0].children[1].children[0].children[0].attribs[adUrlAttr].trim();

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
