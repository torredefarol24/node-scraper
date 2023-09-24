import { initialScrapeURL, OTOMOTOParams } from "./config/scrapeParams";
import { getAllPageUrls } from "./modules/_getAllPageUrls";

// scrape();

(async () => {
	const pageList = await getAllPageUrls(initialScrapeURL, OTOMOTOParams);
	console.log("pageList", pageList);
})();
