"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getAds = void 0;
const cheerio_1 = require("cheerio");
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const scraper_1 = require("../utils/scraper");
async function _getAds(params) {
    try {
        // Parse HTML
        const { scrapeUrl, htmlParams } = params;
        const pageHTML = await (0, scraper_1.getHTML)(scrapeUrl);
        const $ = (0, cheerio_1.load)(pageHTML);
        // Select HTML element by attr & get all ads
        const adListDiv = $(htmlParams.parentElemAttr);
        const allAds = adListDiv[0].children;
        // Remove divs that don't contain ads
        const validAds = allAds.filter((item) => {
            return !item.attribs.role;
        });
        return validAds;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.getTotalAdsCountFailed} ${err}`);
    }
}
exports._getAds = _getAds;
