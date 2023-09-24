"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHTML = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("./logger");
/**
 * Launch puppeteer instance and return
 * html of the webpage
 */
async function getHTML(url) {
    try {
        /** Launch an instance of the browser */
        const browser = await puppeteer_1.default.launch({
            headless: "new",
        });
        /** Visit the url */
        const page = await browser.newPage();
        await page.goto(url);
        /** Get HTML content of the page */
        const pageHTML = await page.evaluate(() => {
            return document.documentElement.innerHTML;
        });
        /** Close browser for memory leaks & return page HTML */
        logger_1.logger.info(successErrorMessages_1.successMessages.scrapingDone);
        await browser.close();
        return pageHTML;
    }
    catch (err) {
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
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.scrapingFailed} ${err}`);
    }
}
exports.getHTML = getHTML;