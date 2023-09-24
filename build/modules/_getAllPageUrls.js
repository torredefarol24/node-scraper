"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPageUrls = void 0;
const cheerio_1 = require("cheerio");
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const getNextPageUrl_1 = require("./getNextPageUrl");
const getTotalAdsCount_1 = require("./getTotalAdsCount");
/**
 * Function to get all the urls from pagination items
 * for the provided scraping url
 */
async function getAllPageUrls(scrapeUrl, params) {
    try {
        /** Get ad count & page HTML from scraping URL */
        const { totalAdCount, pageHTML } = await (0, getTotalAdsCount_1.getTotalAdsCount)(scrapeUrl, params);
        /**
         * Case 1: No Ads Found
         * Return empty array
         */
        const noResultsFound = totalAdCount === 0;
        if (noResultsFound) {
            return [];
        }
        /**
         * Case 2: Ads Found
         * Locate paginator and
         * Determine the number of pages for scraping
         */
        const { currentPageClass, dataTestIdAttr, nextPageAttr } = params;
        const $ = (0, cheerio_1.load)(pageHTML);
        const currentPageCount = $(currentPageClass).length;
        /**
         * Case 2A: Ads exist but no pagination found, ie: one page found
         * Return array with one element containing initial scraping url
         */
        const adsInOnePage = currentPageCount === 0 && totalAdCount > 0;
        if (adsInOnePage) {
            return [
                {
                    page: 1,
                    url: scrapeUrl,
                },
            ];
        }
        /**
         * Case 2B: * Ads exist and pagination found, ie: multiple pages found
         * Determine page count from pagination
         */
        const adsInMultiplePage = currentPageCount > 0 && totalAdCount > 0;
        let pageCount = 0;
        if (adsInMultiplePage) {
            const nextPageSelector = `[${dataTestIdAttr}="${nextPageAttr}"]`;
            const nextPageArrow = $(nextPageSelector);
            pageCount = nextPageArrow[0].prev.children[0].children[0].children[0].data;
        }
        /**
         * Loop through pagination items to get all page urls
         * Use the initial scraping url to get the next page url
         * Store the next page url in an array
         * Fetch the last item of the array to get the previously inserted url
         * Use that inserted url to get again the next page's url
         */
        let pageUrls = [];
        let currentURL = scrapeUrl;
        for (var i = 0; i < pageCount; i++) {
            let nextURL = await (0, getNextPageUrl_1.getNextPageUrl)(currentURL, params);
            pageUrls.push({
                page: i + 1,
                url: nextURL,
            });
            currentURL = pageUrls[pageUrls.length - i - 1].url;
        }
        logger_1.logger.info(successErrorMessages_1.successMessages.findAllPageUrlsDone);
        return pageUrls;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.findAllPageUrlsFailed} ${err}`);
    }
}
exports.getAllPageUrls = getAllPageUrls;
