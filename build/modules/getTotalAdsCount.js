"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalAdsCount = void 0;
const cheerio_1 = require("cheerio");
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const htmlFetcher_1 = require("../utils/htmlFetcher");
/**
 * Function to get the total number of ads
 * for the provided URL
 */
async function getTotalAdsCount(params) {
    try {
        // Get page HTML & parse it
        const { scrapeUrl, htmlParams } = params;
        const pageHTML = await (0, htmlFetcher_1.getHTML)(scrapeUrl);
        const $ = (0, cheerio_1.load)(pageHTML);
        // Locate Selector & retrieve ad count
        const adListDiv = $(htmlParams.itemListParentAttr);
        const totalAdCount = adListDiv[0].prev.children[0].children[0].children[0].next.children[1].children[0].data.trim();
        logger_1.logger.info(successErrorMessages_1.successMessages.getTotalAdsCountDone);
        return totalAdCount;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.getTotalAdsCountFailed} ${err}`);
    }
}
exports.getTotalAdsCount = getTotalAdsCount;
