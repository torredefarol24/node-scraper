"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUCCESS_MESSAGES = exports.ERROR_MESSAGES = void 0;
const failedSuffix = "Failed";
const successSuffix = "Complete";
exports.ERROR_MESSAGES = {
    SCRAPING_FAILED: `Scraping ${failedSuffix}`,
    GET_TOTAL_ADS_COUNT_FAILED: `Get total ads count ${failedSuffix}`,
};
exports.SUCCESS_MESSAGES = {
    SCRAPING_DONE: `Scraping ${successSuffix}`,
    GET_TOTAL_ADS_COUNT_DONE: `Get total ads count ${successSuffix}`,
};
