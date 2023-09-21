"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalAdsCount = void 0;
const cheerio_1 = require("cheerio");
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const scraper_1 = require("../utils/scraper");
async function getTotalAdsCount(params) {
    try {
        // Get page HTML & parse it
        const { scrapeUrl, htmlParams } = params;
        const pageHTML = await (0, scraper_1.getHTML)(scrapeUrl);
        const $ = (0, cheerio_1.load)(pageHTML);
        // Locate Selector & retrieve ad count
        const adListDiv = $(htmlParams.parentElemAttr);
        const totalAdCount = adListDiv[0].prev.children[0].children[0].children[0].next.children[1].children[0].data;
        logger_1.logger.info(successErrorMessages_1.successMessages.getTotalAdsCountDone);
        return totalAdCount;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.getTotalAdsCountFailed} ${err}`);
    }
}
exports.getTotalAdsCount = getTotalAdsCount;
