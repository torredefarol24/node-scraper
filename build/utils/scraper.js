"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHTML = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("./logger");
async function getHTML(url) {
    try {
        // Launch an instance of the browser
        const browser = await puppeteer_1.default.launch({
            headless: "new",
        });
        // Visit the url
        const page = await browser.newPage();
        await page.goto(url);
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
