/** Define all success / error actions */
const successSuffix = "Complete";
const failedSuffix = "Failed";
const actions = {
	scraping: "Scraping",
	getTotalAdsCount: "Get total ads count",
	addItems: "Add Items",
	scrapeTruckItem: "Scrape truck item",
	getNextPageUrl: "Get next page url",
	findAllPageUrls: "Find all page urls",
};

/** Add success suffix to messages */ 
export const successMessages = {
	scrapingDone: `${actions.scraping} ${successSuffix}`,
	getTotalAdsCountDone: `${actions.getTotalAdsCount} ${successSuffix}`,
	addItemsDone: `${actions.addItems} ${successSuffix}`,
	scrapeTruckItemDone: `${actions.scrapeTruckItem} ${successSuffix}`,
	getNextPageUrlDone: `${actions.getNextPageUrl} ${successSuffix}`,
	findAllPageUrlsDone: `${actions.findAllPageUrls} ${successSuffix}`,
};

/** Add failure suffix to messages */ 
export const errorMessages = {
	scrapingFailed: `${actions.scraping} ${failedSuffix}`,
	getTotalAdsCountFailed: `${actions.getTotalAdsCount} ${failedSuffix}`,
	addItemsFailed: `${actions.addItems} ${failedSuffix}`,
	scrapeTruckItemFailed: `${actions.scrapeTruckItem} ${failedSuffix}`,
	getNextPageUrlFailed: `${actions.getNextPageUrl} ${failedSuffix}`,
	findAllPageUrlsFailed: `${actions.findAllPageUrls} ${failedSuffix}`,
};
