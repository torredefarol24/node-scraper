"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._getAds = void 0;
const cheerio = __importStar(require("cheerio"));
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const scraper_1 = require("../utils/scraper");
async function _getAds(params) {
    try {
        // Parse HTML
        const { SCRAPE_URL, HTML_PARAMS } = params;
        const pageHTML = await (0, scraper_1.getHTML)(SCRAPE_URL);
        const $ = cheerio.load(pageHTML);
        // Select HTML element by attr
        const $AD_LIST = $(HTML_PARAMS.PARENT_ELEM_ATTR);
        // Get all ads from list
        const $TOTAL_ADS = $AD_LIST["0"].children;
        // Remove divs that don't contain ads
        const $ADS = $TOTAL_ADS.filter((item) => {
            return !item.attribs.role;
        });
        return $ADS;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.ERROR_MESSAGES.GET_TOTAL_ADS_COUNT_FAILED} ${err}`);
    }
}
exports._getAds = _getAds;
