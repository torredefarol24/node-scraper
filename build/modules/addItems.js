"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItems = void 0;
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const _getAds_1 = require("./_getAds");
async function addItems() {
    try {
        // Get Ads after scraping
        const ads = await (0, _getAds_1._getAds)();
        logger_1.logger.info(successErrorMessages_1.SUCCESS_MESSAGES.ADD_ITEMS_DONE);
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.ERROR_MESSAGES.ADD_ITEMS_FAILED} ${err}`);
    }
}
exports.addItems = addItems;
