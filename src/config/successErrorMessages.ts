const successSuffix = "Complete";
const failedSuffix = "Failed";

export const successMessages = {
	scrapingDone: `Scraping ${successSuffix}`,
	getTotalAdsCountDone: `Get total ads count ${successSuffix}`,
	addItemsDone: `Add Items ${successSuffix}`,
	scrapeTruckItemDone: `Scrape truck item ${successSuffix}`,
};

export const errorMessages = {
	scrapingFailed: `Scraping ${failedSuffix}`,
	getTotalAdsCountFailed: `Get total ads count ${failedSuffix}`,
	addItemsFailed: `Add Items ${failedSuffix}`,
	scrapeTruckItemFailed: `Scrape truck item ${failedSuffix}`,
};
