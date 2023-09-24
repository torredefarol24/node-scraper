import { load } from "cheerio";
import { IScrapeParams } from "../bootstrap/interface";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { getHTML } from "../utils/htmlFetcher";
import { logger } from "../utils/logger";

/**
 * Function to get the total number of ads
 * for the provided URL
 */

export async function getTotalAdsCount(scrapeUrl: string, params: IScrapeParams) {
	try {
		/** Get page HTML */
		const { dataTestIdAttr, itemListParentAttr } = params;
		const pageHTML: any = await getHTML(scrapeUrl);
		const $ = load(pageHTML);

		/** Locate Selector & retrieve ad count */
		const allAdsSelector = `[${dataTestIdAttr}="${itemListParentAttr}"]`;
		const adListDiv: any = $(allAdsSelector);
		const totalAdCount =
			adListDiv[0].prev.children[0].children[0].children[0].next.children[1].children[0].data.trim();

		logger.info(successMessages.getTotalAdsCountDone);
		
		return {
			totalAdCount,
			pageHTML,
		};
	} catch (err: any) {
		logger.error(`${errorMessages.getTotalAdsCountFailed} ${err}`);
	}
}
