const successSuffix = "Complete";
const failedSuffix = "Failed";

export const SUCCESS_MESSAGES = {
	SCRAPING_DONE: `Scraping ${successSuffix}`,
	GET_TOTAL_ADS_COUNT_DONE: `Get total ads count ${successSuffix}`,
	ADD_ITEMS_DONE: `Add Items ${successSuffix}`
};

export const ERROR_MESSAGES = {
	SCRAPING_FAILED: `Scraping ${failedSuffix}`,
	GET_TOTAL_ADS_COUNT_FAILED: `Get total ads count ${failedSuffix}`,
	ADD_ITEMS_FAILED: `Add Items ${failedSuffix}`
};

