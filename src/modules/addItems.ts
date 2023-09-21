import * as cheerio from "cheerio";
import { ITEMS_LIST_PARAMS } from "../config/scrapeParams";
import { logger } from "../utils/logger";
import { getHTML } from "../utils/scrape";

export async function addItems() {
	try {
		// Parse HTML
		const pageHTML: any = await getHTML();
		const $ = cheerio.load(pageHTML);

		// Select HTML elem by attr
		const $AD_LIST = $(ITEMS_LIST_PARAMS.PARENT_ELEM_ATTR);
	} catch (err: any) {
		logger.error(`AddItems Failed ${err}`);
	}
}
