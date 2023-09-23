"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeTruckItem = void 0;
const cheerio_1 = require("cheerio");
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const _getAds_1 = require("./_getAds");
/**
 * Function that
 * - Scrapes truck data
 * - Parses and sanitizes it
 */
async function scrapeTruckItem(params) {
    try {
        // Get Ads after scraping
        const { htmlParams } = params;
        const { adIdAttr, adPriceAttr, itemFilterAttr, adParameterAttr, adRegDateAttr, adPowerAttr, adMileageAttr, } = htmlParams;
        const { ads, pageHTML } = await (0, _getAds_1._getAds)(params);
        // Get production year info
        const $ = (0, cheerio_1.load)(pageHTML);
        const filterDiv = $(itemFilterAttr);
        const productionDate = filterDiv[0].children[4].children[0].children[0].data
            .split(" ")[1]
            .trim();
        // Retrieve truck properties
        const items = ads.map((item, _id) => {
            let itemSection = item.children[0].children[0];
            // Parse id, title, price
            let id = item.children[0].attribs[adIdAttr].trim();
            let title = itemSection.children[1].children[0].children[0].children[0].data.trim();
            let price = itemSection.children[3].children[1].children[1].attribs[adPriceAttr].trim();
            // Parse power, mileage, registration date
            let propertyDiv = itemSection.children[2].children[1].children;
            let mileage = "", power = "", registrationDate = "";
            propertyDiv.map((dd) => {
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
            const truck = {
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
        logger_1.logger.info(successErrorMessages_1.successMessages.scrapeTruckItemDone);
        return items;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.scrapeTruckItemFailed} ${err}`);
    }
}
exports.scrapeTruckItem = scrapeTruckItem;
