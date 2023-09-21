import { getAdCount } from "./modules/getTotalAdsCount";

// addItems();
(async function () {
	try {
		const adCount = await getAdCount();
		console.log("Total AdCount", adCount);
	} catch (err) {}
})();

// class AdScraper {
// 	constructor() {}
// }
