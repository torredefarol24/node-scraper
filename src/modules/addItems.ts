import * as cheerio from "cheerio";
import { ITEMS_LIST_PARAMS } from "../config/scrapeParams";
import { logger } from "../utils/logger";
import { getHTML } from "../utils/scrape";

export async function addItems() {
	// try {
	// 	const pageHTML = await getHTML();
	// 	const $ = cheerio.load(pageHTML);
	// 	const $AD_LIST = $(ITEMS_LIST_PARAMS.PARENT_ELEM_ATTR);

	// 	logger.info($);
	// } catch (err: any) {
	// 	logger.error(`AddItems Failed ${err}`);
	// }
}
