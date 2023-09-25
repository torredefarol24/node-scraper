import { load } from "cheerio";
import { IPage, IScrapeParams } from "../bootstrap/interface";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { getNextPageUrl } from "./getNextPageUrl";
import { getTotalAdsCount } from "./getTotalAdsCount";

/**
 * Function to get all the urls from pagination items
 * for the provided scraping url
 */

export async function getAllPageUrls(scrapeUrl: string, params: IScrapeParams) {
	try {
		/** Get ad count & page HTML from scraping URL */
		const { totalAdCount, pageHTML }: any = await getTotalAdsCount(scrapeUrl, params);

		/**
		 * Case 1: No Ads Found
		 * Return empty array
		 */
		const noResultsFound = totalAdCount === 0;
		if (noResultsFound) {
			return [];
		}

		/**
		 * Case 2: Ads Found
		 * Locate paginator and
		 * Determine the number of pages for scraping
		 */
		const { currentPageClass, dataTestIdAttr, nextPageAttr } = params;
		const $ = load(pageHTML);
		const currentPageCount = $(currentPageClass).length;

		/**
		 * Case 2A: Ads exist but no pagination found, ie: one page found
		 * Return array with one element containing initial scraping url
		 */
		const adsInOnePage = currentPageCount === 0 && totalAdCount > 0;
		if (adsInOnePage) {
			return [
				{
					page: 1,
					url: scrapeUrl,
				},
			];
		}

		/**
		 * Case 2B: * Ads exist and pagination found, ie: multiple pages found
		 * Determine page count from pagination
		 */
		const adsInMultiplePage = currentPageCount > 0 && totalAdCount > 0;
		let pageCount = 0;

		if (adsInMultiplePage) {
			const nextPageSelector = `[${dataTestIdAttr}="${nextPageAttr}"]`;
			const nextPageArrow: any = $(nextPageSelector);
			pageCount = nextPageArrow[0]?.prev?.children[0]?.children[0]?.children[0]?.data;
		}

		/**
		 * Loop through pagination items to get all page urls
		 * Use the initial scraping url to get the next page url
		 * Store the next page url in an array
		 * Fetch the last item of the array to get the previously inserted url
		 * Use that inserted url to get again the next page's url
		 */
		let pageUrls = [];
		let currentURL: any = scrapeUrl;
		let nextURL: any = "";

		for (var i = 0; i < pageCount; i++) {
			/**
			 * Temporary Solution to get all page urls
			 * 1. Approach through Puppeteer gives error
			 * 2. Approach through scraping does not yield data
			 */

			/** Append page nums by replacing & incrementing value */
			if (i < 2) {
				nextURL = await getNextPageUrl(currentURL, params);
			} else {
				nextURL = `${currentURL.split(`&page=${i + 1}`)[0]}&page=${i + 2}`;
			}

			/**
			 * Store all page urls to scrape later
			 * Prepare data to return
			 */
			let pageURL: IPage = {
				page: i + 1,
				url: currentURL,
			};
			pageUrls.push(pageURL);
			currentURL = nextURL;
		}

		logger.info(successMessages.findAllPageUrlsDone);
		return pageUrls;
	} catch (err: any) {
		logger.error(`${errorMessages.findAllPageUrlsFailed} ${err}`);
	}
}
