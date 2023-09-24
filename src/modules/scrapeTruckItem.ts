import { load } from "cheerio";
import { IScrapeParams, ITruck } from "../bootstrap/interface";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { _getAds } from "./_getAds";

/**
 * Function that Scrapes truck data, parses and sanitizes it
 */

export async function scrapeTruckItem(scrapeUrl: string, params: IScrapeParams) {
	try {
		/** Get ads from provided URL */
		const {
			adIdAttr,
			adPriceAttr,
			dataTestIdAttr,
			itemFilterAttr,
			adParameterAttr,
			adRegDateAttr,
			adPowerAttr,
			adMileageAttr,
		} = params;
		const { ads, pageHTML, adsFound }: any = await _getAds(scrapeUrl, params);

		/**
		 * Case 1
		 * No Ads Found
		 * Return Empty Array
		 */
		if (!adsFound) {
			return [];
		}

		/**
		 * Case 2
		 * Ads Found
		 * Parse truck information & return the list
		 */

		/** Get production year */
		const $ = load(pageHTML);
		const filterSelector = `[${dataTestIdAttr}="${itemFilterAttr}"]`;
		const filterDiv: any = $(filterSelector);
		const productionDate = filterDiv[0].children[4].children[0].children[0].data
			.split(" ")[1]
			.trim();

		/** Get truck list */
		const trucks = ads.map((truckElem: any) => {
			let truckSection = truckElem.children[0].children[0];

			/** Parse id, title, price */
			let id = truckElem.children[0].attribs[adIdAttr].trim();
			let title = truckSection.children[1].children[0].children[0].children[0].data.trim();
			let price = truckSection.children[3].children[1].children[1].attribs[adPriceAttr].trim();

			/** Parse power, mileage, registration date */
			let truckPropertyDiv = truckSection.children[2].children[1].children;
			let mileage = "",
				power = "",
				registrationDate = "";

			truckPropertyDiv.map((dd: any) => {
				if (dd.attribs[adParameterAttr] === adRegDateAttr) {
					registrationDate = dd.children[0].next.data.trim();
				}

				if (dd.attribs[adParameterAttr] === adMileageAttr) {
					mileage = dd.children[0].next.data.trim();
				}

				if (dd.attribs[adParameterAttr] === adPowerAttr) {
					power = dd.children[0].next.data.trim();
				}
			});

			const truck: ITruck = {
				id,
				title,
				price,
				productionDate,
				mileage,
				power,
				registrationDate,
			};
			return truck;
		});

		logger.info(successMessages.scrapeTruckItemDone);
		return trucks;
	} catch (err: any) {
		logger.error(`${errorMessages.scrapeTruckItemFailed} ${err}`);
	}
}
