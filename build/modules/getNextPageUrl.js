"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextPageUrl = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
/**
 * Function to get the url of the next page
 */
async function getNextPageUrl(scrapeUrl, params) {
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
        const browser = await puppeteer_1.default.launch({
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
        logger_1.logger.info(successErrorMessages_1.successMessages.getNextPageUrlDone);
        return page.url();
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.getNextPageUrlFailed} ${err}`);
    }
}
exports.getNextPageUrl = getNextPageUrl;
