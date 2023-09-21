"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHTML = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const scrapeParams_1 = require("../config/scrapeParams");
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("./logger");
async function getHTML() {
    try {
        // Launch an instance of the browser
        const browser = await puppeteer_1.default.launch({
            headless: "new",
        });
        // Visit the url
        const page = await browser.newPage();
        await page.goto(scrapeParams_1.SCRAPE_URL);
        // Get HTML content of the page
        const pageHTML = await page.evaluate(() => {
            return document.documentElement.innerHTML;
        });
        // Close browser for memory leaks
        // Return page HTML
        logger_1.logger.info(successErrorMessages_1.SUCCESS_MESSAGES.SCRAPING_DONE);
        await browser.close();
        return pageHTML;
    }
    catch (err) {
        // For now, log the error
        // TO DO: throw error & catch in central error handler
        logger_1.logger.error(`${successErrorMessages_1.ERROR_MESSAGES.SCRAPING_FAILED} ${err}`);
    }
}
exports.getHTML = getHTML;
