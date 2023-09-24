import { addItems } from "../modules/addItems";
import { getNextPageUrl } from "../modules/getNextPageUrl";
import { getTotalAdsCount } from "../modules/getTotalAdsCount";
import { scrapeTruckItem } from "../modules/scrapeTruckItem";
import { IScrapeParams } from "./interface";

export class Scraper {
	private _params: IScrapeParams;
	constructor(scrapeParams: IScrapeParams) {
		this._params = scrapeParams;
	}

	public async getTotalAdsCount(url: string) {
		return await getTotalAdsCount(url, this._params);
	}

	public async addItems(url: string) {
		return await addItems(url, this._params);
	}

	public async scrapeTruck(url: string) {
		return await scrapeTruckItem(url, this._params);
	}

	public async getNextPageUrl(url: string) {
		return await getNextPageUrl(url, this._params);
	}
}
