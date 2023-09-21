"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeTruckItem = void 0;
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const _getAds_1 = require("./_getAds");
async function scrapeTruckItem(params) {
    try {
        // Get Ads after scraping
        const { htmlParams } = params;
        const { adIdAttr } = htmlParams;
        const ads = await (0, _getAds_1._getAds)(params);
        // Retrieve truck properties
        const items = ads.map((item) => {
            let id = item.children[0].attribs[adIdAttr];
            let title = item.children[0].children[0].children[1].children[0].children[0].children[0].data;
            console.log("id", id);
            console.log("title", title);
            return {};
        });
        logger_1.logger.info(successErrorMessages_1.successMessages.scrapeTruckItemDone);
        return items;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.scrapeTruckItemFailed} ${err}`);
    }
}
exports.scrapeTruckItem = scrapeTruckItem;
