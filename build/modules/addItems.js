"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItems = void 0;
const scrapeParams_1 = require("../config/scrapeParams");
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const _getAds_1 = require("./_getAds");
async function addItems() {
    try {
        // Get Ads after scraping
        const ads = await (0, _getAds_1._getAds)();
        // Retrieve urls & ids
        const items = ads.map((item) => {
            let id = item.children[0].attribs[scrapeParams_1.ITEMS_LIST_PARAMS.AD_ID_FROM_ARTICLE];
            let url = item.children[0].children[0].children[1].children[0].children[0].attribs[scrapeParams_1.ITEMS_LIST_PARAMS.AD_URL_FROM_ANCHOR];
            return {
                id,
                url,
            };
        });
        logger_1.logger.info(successErrorMessages_1.SUCCESS_MESSAGES.ADD_ITEMS_DONE);
        return items;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.ERROR_MESSAGES.ADD_ITEMS_FAILED} ${err}`);
    }
}
exports.addItems = addItems;
