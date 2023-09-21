import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { _getAds } from "./_getAds";

export async function addItems() {
	try {
		// Get Ads after scraping
		const ads = await _getAds();
		logger.info(SUCCESS_MESSAGES.ADD_ITEMS_DONE);
	} catch (err: any) {
		logger.error(`${ERROR_MESSAGES.ADD_ITEMS_FAILED} ${err}`);
	}
}
