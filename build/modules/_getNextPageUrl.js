"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextPgURL = void 0;
const cheerio_1 = require("cheerio");
const scrapeParams_1 = require("../config/scrapeParams");
const successErrorMessages_1 = require("../config/successErrorMessages");
const htmlFetcher_1 = require("../utils/htmlFetcher");
const logger_1 = require("../utils/logger");
async function getNextPgURL(url) {
    try {
        // Get HTML
        const { htmlParams, domain } = scrapeParams_1.OTOMOTOParams;
        const { currentPageClass, adHrefAttr } = htmlParams;
        const pageHTML = await (0, htmlFetcher_1.getHTML)(url);
        const $ = (0, cheerio_1.load)(pageHTML);
        // Locate paginator & find next page url
        const currentPageItem = $(currentPageClass);
        let nextPageUrl = null;
        // If paginator exists, then there's a next page
        if (currentPageItem.length > 0) {
            nextPageUrl = `${domain}${currentPageItem[0].next.children[0].attribs[adHrefAttr].trim()}`;
        }
        logger_1.logger.info(successErrorMessages_1.successMessages.getNextPageUrlDone);
        return nextPageUrl;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.getNextPageUrlFailed} ${err}`);
    }
}
exports.getNextPgURL = getNextPgURL;
