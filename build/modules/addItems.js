"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItems = void 0;
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const _getAds_1 = require("./_getAds");
async function addItems(params) {
    try {
        // Get Ads after scraping
        const { HTML_PARAMS } = params;
        const ads = await (0, _getAds_1._getAds)(params);
        // Retrieve urls & ids
        const items = ads.map((item) => {
            let id = item.children[0].attribs[HTML_PARAMS.AD_ID_ATTR];
            let url = item.children[0].children[0].children[1].children[0].children[0].attribs[HTML_PARAMS.AD_URL_ATTR];
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
