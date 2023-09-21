"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addItems_1 = require("./modules/addItems");
(async function () {
    try {
        // const adCount = await getAdCount();
        // console.log("Total AdCount", adCount);
        const items = await (0, addItems_1.addItems)();
        console.log("Items", items);
    }
    catch (err) { }
})();
// class AdScraper {
// 	constructor() {}
// }
