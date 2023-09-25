import { scrape } from "./main/scrape";
import { scrapeAll } from "./main/scrapeAll";

const app = {
	scrape: () => scrape(),
	scrapeAll: () => scrapeAll(),
};

/** Scrape everything once from initial URL */
app.scrape();

/** Scrape from all pages & ads */
// app.scrapeAll();
