import puppeteer from "puppeteer";
import { SCRAPE_URL } from "../config";
import { logger } from "./logger";

export async function getHTML() {
	try {

		// Launch an instance of the browser
		const browser = await puppeteer.launch({
			headless: "new",
		});

		// Visit the url
		const page = await browser.newPage();
		await page.goto(SCRAPE_URL);

		// Get HTML content of the page
		const pageHTML:string = await page.evaluate(() => {
			return document.documentElement.innerHTML;
		});

		logger.info(`HTML Fetching Complete`);
		await browser.close();
		return pageHTML;
	} catch (err: any) {
		logger.error(`HTML Fetching Failed ${err}`);
		throw new Error(err.toString());
	}
}
