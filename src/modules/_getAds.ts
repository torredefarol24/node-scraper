import { load } from "cheerio";
import { IScrapeParams } from "../bootstrap/interface";
import { errorMessages } from "../config/successErrorMessages";
import { getHTML } from "../utils/htmlFetcher";
import { logger } from "../utils/logger";

/**
 * Helper Function that receives scraping params, scraping url
 * Returns the adlist along with the html of the page
 */

export async function _getAds(scrapeUrl: string, params: IScrapeParams) {
	try {
		/** Parse HTML */
		const { dataTestIdAttr, itemListParentAttr } = params;
		const pageHTML: any = await getHTML(scrapeUrl);
		const $ = load(pageHTML);

		/** Locate Selector */
		const allAdsSelector = `[${dataTestIdAttr}="${itemListParentAttr}"]`;
		const adListDiv: any = $(allAdsSelector);
		const allAds = adListDiv[0].children;

		/** 
		 * Case 1
		 * No ads found, return empty array
		*/
		if (allAds.length === 0) {
			return {
				adsFound: false,
				ads: [],
				pageHTML: "",
			};
		}

		/** 
		 * Case 2
		 * Ads found, sanitize data by removing divs that don't contain ads 
		 * Return cleaned data list
		*/
		const validAds = allAds.filter((item: any) => {
			return !item.attribs.role;
		});

		return {
			adsFound: validAds.length > 0,
			ads: validAds,
			pageHTML,
		};
	} catch (err: any) {
		logger.error(`${errorMessages.getTotalAdsCountFailed} ${err}`);
	}
}
