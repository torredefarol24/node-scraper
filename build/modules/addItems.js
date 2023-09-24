"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItems = void 0;
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const _getAds_1 = require("./_getAds");
/**
 * Function that fetches the url and the item id
 * from the ad list
 */
async function addItems(scrapeUrl, params) {
    try {
        /** Get Ads after scraping */
        const { adIdAttr, adHrefAttr } = params;
        const { adsFound, ads } = await (0, _getAds_1._getAds)(scrapeUrl, params);
        /**
         * Case 1
         * No ads found
         * Return empty array
         */
        if (!adsFound) {
            return [];
        }
        /**
         * Case 2
         * Ads exist, retrieve urls & ids
         * Return list of ads
         */
        const items = ads.map((item) => {
            let id = item.children[0].attribs[adIdAttr].trim();
            let url = item.children[0].children[0].children[1].children[0].children[0].attribs[adHrefAttr].trim();
            const _item = {
                id,
                url,
            };
            return _item;
        });
        logger_1.logger.info(successErrorMessages_1.successMessages.addItemsDone);
        return items;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.addItemsFailed} ${err}`);
    }
}
exports.addItems = addItems;
