import * as cheerio from "cheerio";
import { logger } from "../utils/logger";
import { getHTML } from "../utils/scrape";

export async function addItems() {
	try {
		// const pageHTML = await getHTML();
		// const $ = cheerio.load(pageHTML);
		// logger.info($);
	} catch (err: any) {
		logger.error(`AddItems Failed ${err}`);
	}
}
