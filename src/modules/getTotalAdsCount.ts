import { load } from "cheerio";
import { IScrapeParams } from "../bootstrap/interface";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { getHTML } from "../utils/htmlFetcher";

/**
 * Function to get the total number of ads
 * for the provided URL
 */

export async function getTotalAdsCount(params: IScrapeParams) {
	try {
		// Get page HTML & parse it
		const { scrapeUrl, htmlParams } = params;
		const pageHTML: any = await getHTML(scrapeUrl);
		const $ = load(pageHTML);

		// Locate Selector & retrieve ad count
		const adListDiv: any = $(htmlParams.itemListParentAttr);
		const totalAdCount =
			adListDiv[0].prev.children[0].children[0].children[0].next.children[1].children[0].data.trim();

		logger.info(successMessages.getTotalAdsCountDone);
		return totalAdCount;
	} catch (err: any) {
		logger.error(`${errorMessages.getTotalAdsCountFailed} ${err}`);
	}
}
