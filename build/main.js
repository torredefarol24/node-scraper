"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTotalAdsCount_1 = require("./modules/getTotalAdsCount");
// addItems();
(async function () {
    try {
        const adCount = await (0, getTotalAdsCount_1.getAdCount)();
        console.log("Total AdCount", adCount);
    }
    catch (err) { }
})();
// class AdScraper {
// 	constructor() {}
// }
