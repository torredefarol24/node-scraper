"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageUrls = void 0;
const cheerio_1 = require("cheerio");
const scrapeParams_1 = require("../config/scrapeParams");
const successErrorMessages_1 = require("../config/successErrorMessages");
const htmlFetcher_1 = require("../utils/htmlFetcher");
const logger_1 = require("../utils/logger");
/**
 * Function to get all the urls
 */
const _pageWithPagination = scrapeParams_1.initialScrapeURL;
const _singlePage = "https://www.otomoto.pl/ciezarowe/mercedes-benz/lubuskie";
const _twoPages = "https://www.otomoto.pl/ciezarowe/mercedes-benz/warminsko-mazurskie";
const _scrapingURL = _twoPages;
async function getPageUrls(params) {
    try {
        // Get HTML
        const { htmlParams } = params;
        const { currentPageClass, adHrefAttr, dataTestIdAttr, nextPageAttr } = htmlParams;
        const pageHTML = await (0, htmlFetcher_1.getHTML)(_scrapingURL);
        const $ = (0, cheerio_1.load)(pageHTML);
        // Locate paginator & find page count
        const currentPageCount = $(currentPageClass).length;
        let pageCount = 0;
        let pageUrls = [_scrapingURL];
        // If URL has pagination, ie more than 1 page
        // get page count
        if (currentPageCount > 0) {
            const nextPageSelector = `[${dataTestIdAttr}="${nextPageAttr}"]`;
            const nextPageArrow = $(nextPageSelector);
            console.log("nextPageArrow", nextPageArrow);
            // nextPageUrl = `${domain}${currentPageItem[0].next.children[0].attribs[adHrefAttr].trim()}`;
        }
        logger_1.logger.info(successErrorMessages_1.successMessages.findAllPageUrlsDone);
        return pageUrls;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.findAllPageUrlsFailed} ${err}`);
    }
}
exports.getPageUrls = getPageUrls;
// next page arrow, prev item
// loop until pageCount & fetch next urls
