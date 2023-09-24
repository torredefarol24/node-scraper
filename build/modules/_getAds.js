"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getAds = void 0;
const cheerio_1 = require("cheerio");
const successErrorMessages_1 = require("../config/successErrorMessages");
const htmlFetcher_1 = require("../utils/htmlFetcher");
const logger_1 = require("../utils/logger");
/**
 * Helper Function that receives scraping params, scraping url
 * Returns the adlist along with the html of the page
 */
async function _getAds(scrapeUrl, params) {
    try {
        /** Parse HTML */
        const { dataTestIdAttr, itemListParentAttr } = params;
        const pageHTML = await (0, htmlFetcher_1.getHTML)(scrapeUrl);
        const $ = (0, cheerio_1.load)(pageHTML);
        /** Locate Selector */
        const allAdsSelector = `[${dataTestIdAttr}="${itemListParentAttr}"]`;
        const adListDiv = $(allAdsSelector);
        const allAds = adListDiv[0].children;
        /**
         * Case 1
         * No ads found, return empty array
        */
        if (allAds.length === 0) {
            return {
                adsFound: false,
                ads: [],
                pageHTML: "",
            };
        }
        /**
         * Case 2
         * Ads found, sanitize data by removing divs that don't contain ads
         * Return cleaned data list
        */
        const validAds = allAds.filter((item) => {
            return !item.attribs.role;
        });
        return {
            adsFound: validAds.length > 0,
            ads: validAds,
            pageHTML,
        };
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.getTotalAdsCountFailed} ${err}`);
    }
}
exports._getAds = _getAds;
