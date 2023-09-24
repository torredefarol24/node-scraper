"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scrapeParams_1 = require("./config/scrapeParams");
const _getAllPageUrls_1 = require("./modules/_getAllPageUrls");
// scrape();
(async () => {
    const pageList = await (0, _getAllPageUrls_1.getAllPageUrls)(scrapeParams_1.initialScrapeURL, scrapeParams_1.OTOMOTOParams);
    console.log("pageList", pageList);
})();
