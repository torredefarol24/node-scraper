import * as cheerio from "cheerio";
import { ERROR_MESSAGES } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { getHTML } from "../utils/scraper";
import { IScrapeParams } from "../bootstrap/interface";

export async function _getAds(params: IScrapeParams) {
	try {
		// Parse HTML
		const { SCRAPE_URL, HTML_PARAMS } = params;
		const pageHTML: any = await getHTML(SCRAPE_URL);
		const $ = cheerio.load(pageHTML);

		// Select HTML element by attr
		const $AD_LIST: any = $(HTML_PARAMS.PARENT_ELEM_ATTR);

		// Get all ads from list
		const $TOTAL_ADS = $AD_LIST["0"].children;

		// Remove divs that don't contain ads
		const $ADS = $TOTAL_ADS.filter((item: any) => {
			return !item.attribs.role;
		});

		return $ADS;
	} catch (err: any) {
		logger.error(`${ERROR_MESSAGES.GET_TOTAL_ADS_COUNT_FAILED} ${err}`);
	}
}
