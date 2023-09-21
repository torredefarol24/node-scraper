import { IScrapeParams } from "../bootstrap/interface";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { _getAds } from "./_getAds";

export async function getTotalAdsCount(params: IScrapeParams) {
	try {
		// Get Ads after scraping
		const ads = await _getAds(params);
		logger.info(SUCCESS_MESSAGES.GET_TOTAL_ADS_COUNT_DONE);
		return ads.length;
	} catch (err: any) {
		logger.error(`${ERROR_MESSAGES.GET_TOTAL_ADS_COUNT_FAILED} ${err}`);
	}
}
