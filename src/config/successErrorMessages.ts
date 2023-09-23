// Define all succ/err messages
const successSuffix = "Complete";
const failedSuffix = "Failed";
const actions = {
	scraping: "Scraping",
	getTotalAdsCount: "Get total ads count",
	addItems: "Add Items",
	scrapeTruckItem: "Scrape truck item",
};

// Add success suffix to messages
export const successMessages = {
	scrapingDone: `${actions.scraping} ${successSuffix}`,
	getTotalAdsCountDone: `${actions.getTotalAdsCount} ${successSuffix}`,
	addItemsDone: `${actions.addItems} ${successSuffix}`,
	scrapeTruckItemDone: `${actions.scrapeTruckItem} ${successSuffix}`,
};

// Add failure suffix to messages
export const errorMessages = {
	scrapingFailed: `${actions.scraping} ${failedSuffix}`,
	getTotalAdsCountFailed: `${actions.getTotalAdsCount} ${failedSuffix}`,
	addItemsFailed: `${actions.addItems} ${failedSuffix}`,
	scrapeTruckItemFailed: `${actions.scrapeTruckItem} ${failedSuffix}`,
};
