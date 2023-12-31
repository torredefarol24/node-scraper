import { load } from "cheerio";
import { IScrapeParams } from "../bootstrap/interface";
import { DOMAIN } from "../config/scrapeParams";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { getHTML } from "../utils/htmlFetcher";
import { logger } from "../utils/logger";

/**
 * Function to get the url of the next page
 */

export async function getNextPageUrl(scrapeUrl: string, params: IScrapeParams) {
	try {
		/** Get HTML from provided scraping URL */
		const { currentPageClass, adHrefAttr } = params;
		const pageHTML: any = await getHTML(scrapeUrl);
		const $ = load(pageHTML);

		/** Locate paginator */
		const currentPageItem: any = $(currentPageClass);
		let nextPageUrl = null;

		/**
		 * If paginator exists,
		 * Fetch the next page
		 */
		if (currentPageItem.length > 0) {
			nextPageUrl = `${DOMAIN}${currentPageItem[0].next?.children[0]?.attribs[adHrefAttr].trim()}`;
		}

		logger.info(successMessages.getNextPageUrlDone);
		return nextPageUrl;
	} catch (err: any) {
		logger.error(`${errorMessages.getNextPageUrlFailed} ${err}`);
	}
}
