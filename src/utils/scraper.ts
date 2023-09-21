import puppeteer from "puppeteer";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { logger } from "./logger";

export async function getHTML(url: string) {
	try {
		// Launch an instance of the browser
		const browser = await puppeteer.launch({
			headless: "new",
		});

		// Visit the url
		const page = await browser.newPage();
		await page.goto(url);

		// Get HTML content of the page
		const pageHTML: string = await page.evaluate(() => {
			return document.documentElement.innerHTML;
		});

		// Close browser for memory leaks & return page HTML
		logger.info(successMessages.scrapingDone);
		await browser.close();
		return pageHTML;
	} catch (err: any) {
		// For now, log the error
		// TO DO: throw error & catch in central error handler
		logger.error(`${errorMessages.scrapingFailed} ${err}`);
	}
}
