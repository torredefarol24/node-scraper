"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMessages = exports.successMessages = void 0;
const successSuffix = "Complete";
const failedSuffix = "Failed";
exports.successMessages = {
    scrapingDone: `Scraping ${successSuffix}`,
    getTotalAdsCountDone: `Get total ads count ${successSuffix}`,
    addItemsDone: `Add Items ${successSuffix}`,
    scrapeTruckItemDone: `Scrape truck item ${successSuffix}`,
};
exports.errorMessages = {
    scrapingFailed: `Scraping ${failedSuffix}`,
    getTotalAdsCountFailed: `Get total ads count ${failedSuffix}`,
    addItemsFailed: `Add Items ${failedSuffix}`,
    scrapeTruckItemFailed: `Scrape truck item ${failedSuffix}`,
};
