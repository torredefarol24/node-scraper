import puppeteer from "puppeteer";
import { IScrapeParams } from "../bootstrap/interface";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { logger } from "../utils/logger";

/**
 * Function to get the url of the next page
 */

export async function getNextPageUrl(scrapeUrl: string, params: IScrapeParams) {
	// try {
	// 	/** Get HTML from provided scraping URL */
	// 	const { currentPageClass, adHrefAttr } = params;
	// 	const pageHTML: any = await getHTML(scrapeUrl);
	// 	const $ = load(pageHTML);

	// 	/** Locate paginator */
	// 	const currentPageItem: any = $(currentPageClass);
	// 	let nextPageUrl = null;

	// 	/**
	// 	 * If paginator exists,
	// 	 * Fetch the next page
	// 	 */
	// 	if (currentPageItem.length > 0) {
	// 		nextPageUrl = `${DOMAIN}${currentPageItem[0].next.children[0].attribs[adHrefAttr].trim()}`;
	// 	}

	// 	logger.info(successMessages.getNextPageUrlDone);
	// 	return nextPageUrl;
	// } catch (err: any) {
	// 	logger.error(`${errorMessages.getNextPageUrlFailed} ${err}`);
	// }

	try {
		/** Launch an instance of the browser */
		const browser = await puppeteer.launch({
			headless: true,
			args: ["--no-sandbox"],
			ignoreDefaultArgs: ["--disable-extensions"],
		});

		/** Visit the url */
		const page = await browser.newPage();
		await page.goto(scrapeUrl);

		const { dataTestIdAttr, nextPageAttr } = params;
		const nextPageSelector = `li[${dataTestIdAttr}="${nextPageAttr}"]`;
		console.log("nextPageSelector", nextPageSelector);
		// const response = await page.click(nextPageSelector);

		const [response] = await Promise.all([
			page.click(nextPageSelector, {}),
			page.waitForNavigation({ timeout: 0 }),
		]);

		console.log("RESPONSE", response);

		logger.info(successMessages.getNextPageUrlDone);
		return page.url();
	} catch (err: any) {
		logger.error(`${errorMessages.getNextPageUrlFailed} ${err}`);
	}
}
