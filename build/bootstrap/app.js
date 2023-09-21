"use strict";
const OtoMotoScraper = new Scraper(OTOMOTOParams);
async function scrape() {
	try {
		const adCount = await OtoMotoScraper.getTotalAdsCount();
		console.log("Total AdCount", adCount);
		const items = await OtoMotoScraper.addItems();
		console.log("Items", items);
	} catch (err) {}
}
