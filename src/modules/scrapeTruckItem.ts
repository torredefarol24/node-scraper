import { load } from "cheerio";
import { IScrapeParams, ITruck } from "../bootstrap/interface";
import { errorMessages, successMessages } from "../config/successErrorMessages";
import { logger } from "../utils/logger";
import { _getAds } from "./_getAds";

/**
 * Function that
 * - Scrapes truck data
 * - Parses and sanitizes it
 */

export async function scrapeTruckItem(params: IScrapeParams) {
	try {
		// Get Ads after scraping
		const { htmlParams } = params;
		const {
			adIdAttr,
			adPriceAttr,
			itemFilterAttr,
			adParameterAttr,
			adRegDateAttr,
			adPowerAttr,
			adMileageAttr,
		} = htmlParams;
		const { ads, pageHTML }: any = await _getAds(params);

		// Get production year info
		const $ = load(pageHTML);
		const filterDiv: any = $(itemFilterAttr);
		const productionDate = filterDiv[0].children[4].children[0].children[0].data
			.split(" ")[1]
			.trim();

		// Retrieve truck properties
		const items = ads.map((item: any, _id: any) => {
			let itemSection = item.children[0].children[0];

			// Parse id, title, price
			let id = item.children[0].attribs[adIdAttr].trim();
			let title = itemSection.children[1].children[0].children[0].children[0].data.trim();
			let price = itemSection.children[3].children[1].children[1].attribs[adPriceAttr].trim();

			// Parse power, mileage, registration date
			let propertyDiv = itemSection.children[2].children[1].children;
			let mileage = "",
				power = "",
				registrationDate = "";

			propertyDiv.map((dd: any) => {
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
		return items;
	} catch (err: any) {
		logger.error(`${errorMessages.scrapeTruckItemFailed} ${err}`);
	}
}
