"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalAdsCount = void 0;
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const _getAds_1 = require("./_getAds");
async function getTotalAdsCount(params) {
    try {
        // Get Ads after scraping
        const ads = await (0, _getAds_1._getAds)(params);
        logger_1.logger.info(successErrorMessages_1.SUCCESS_MESSAGES.GET_TOTAL_ADS_COUNT_DONE);
        return ads.length;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.ERROR_MESSAGES.GET_TOTAL_ADS_COUNT_FAILED} ${err}`);
    }
}
exports.getTotalAdsCount = getTotalAdsCount;
