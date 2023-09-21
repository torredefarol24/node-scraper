import { addItems } from "./modules/addItems";
import { getAdCount } from "./modules/getTotalAdsCount";

(async function () {
	try {
		// const adCount = await getAdCount();
		// console.log("Total AdCount", adCount);
		const items = await addItems();
		console.log("Items", items);
	} catch (err) {}
})();

// class AdScraper {
// 	constructor() {}
// }
