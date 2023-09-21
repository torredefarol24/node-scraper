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
		// Find count of list items
		const $AD_LIST: any = $(ITEMS_LIST_PARAMS.PARENT_ELEM_ATTR);
		logger.info(SUCCESS_MESSAGES.GET_TOTAL_ADS_COUNT_DONE);
		return $AD_LIST["0"].children.length;
	} catch (err: any) {
		logger.error(`${ERROR_MESSAGES.GET_TOTAL_ADS_COUNT_FAILED} ${err}`);
	}
}
