import puppeteer from "puppeteer";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { logger } from "./logger";

/**
 * Launch puppeteer instance and return
 * html of the webpage
 */

export async function getHTML(url: string) {
	try {
		/** Launch an instance of the browser */
		const browser = await puppeteer.launch({
			headless: "new",
		});

		/** Visit the url */
		const page = await browser.newPage();
		await page.goto(url);

		/** Get HTML content of the page */
		const pageHTML: string = await page.evaluate(() => {
			return document.documentElement.innerHTML;
		});

		/** Close browser for memory leaks & return page HTML */
		logger.info(successMessages.scrapingDone);
		await browser.close();
		return pageHTML;
	} catch (err: any) {
		/**
		 * TO DO
		 * Chore 1
		 * throw error
		 *
		 * Chore 2
		 * Implement central error handler -
		 * - catch error, log in console
		 * - record in analytics / crashlytics
		 * - setup sentry
		 */

		logger.error(`${errorMessages.scrapingFailed} ${err}`);
	}
}
