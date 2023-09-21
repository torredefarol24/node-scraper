import * as cheerio from "cheerio";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../config/successErrorMessages";
import { ITEMS_LIST_PARAMS } from "../config/scrapeParams";
import { logger } from "../utils/logger";
import { getHTML } from "../utils/scrape";

export async function getAdCount() {
	try {
		// Parse HTML
		const pageHTML: any = await getHTML();
		const $ = cheerio.load(pageHTML);

		// Select HTML element by attr
		const $AD_LIST: any = $(ITEMS_LIST_PARAMS.PARENT_ELEM_ATTR);

		// Get all ads from list
		const $TOTAL_ADS = $AD_LIST["0"].children;

		// Remove divs that don't contain ads
		const $ADS = $TOTAL_ADS.filter((item: any) => {
			return !item.attribs.role;
		});

		logger.info(SUCCESS_MESSAGES.GET_TOTAL_ADS_COUNT_DONE);
		return $ADS.length;
	} catch (err: any) {
		logger.error(`${ERROR_MESSAGES.GET_TOTAL_ADS_COUNT_FAILED} ${err}`);
	}
}
