import { load } from "cheerio";
import { IScrapeParams } from "../bootstrap/interface";
import { errorMessages } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { getHTML } from "../utils/scraper";

export async function _getAds(params: IScrapeParams) {
	try {
		// Parse HTML
		const { scrapeUrl, htmlParams } = params;
		const pageHTML: any = await getHTML(scrapeUrl);
		const $ = load(pageHTML);

		// Select HTML element by attr & get all ads
		const adListDiv: any = $(htmlParams.parentElemAttr);
		const allAds = adListDiv[0].children;

		// Remove divs that don't contain ads
		const validAds = allAds.filter((item: any) => {
			return !item.attribs.role;
		});

		return validAds;
	} catch (err: any) {
		logger.error(`${errorMessages.getTotalAdsCountFailed} ${err}`);
	}
}
