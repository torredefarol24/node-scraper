import { addItems } from "../modules/addItems";
import { getTotalAdsCount } from "../modules/getTotalAdsCount";
import { scrapeTruckItem } from "../modules/scrapeTruckItem";
import { IScrapeParams } from "./interface";

export class Scraper {
	private _params: IScrapeParams;
	constructor(scrapeParams: IScrapeParams) {
		this._params = scrapeParams;
	}

	public async getTotalAdsCount() {
		return await getTotalAdsCount(this._params);
	}

	public async addItems() {
		return await addItems(this._params);
	}

	public async scrapeTruck(){
		return await scrapeTruckItem(this._params);
	}
}
