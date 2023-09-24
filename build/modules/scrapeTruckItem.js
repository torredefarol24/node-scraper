"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeTruckItem = void 0;
const cheerio_1 = require("cheerio");
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("../utils/logger");
const _getAds_1 = require("./_getAds");
/**
 * Function that Scrapes truck data, parses and sanitizes it
 */
async function scrapeTruckItem(scrapeUrl, params) {
    try {
        /** Get ads from provided URL */
        const { adIdAttr, adPriceAttr, dataTestIdAttr, itemFilterAttr, adParameterAttr, adRegDateAttr, adPowerAttr, adMileageAttr, } = params;
        const { ads, pageHTML, adsFound } = await (0, _getAds_1._getAds)(scrapeUrl, params);
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
        const $ = (0, cheerio_1.load)(pageHTML);
        const filterSelector = `[${dataTestIdAttr}="${itemFilterAttr}"]`;
        const filterDiv = $(filterSelector);
        const productionDate = filterDiv[0].children[4].children[0].children[0].data
            .split(" ")[1]
            .trim();
        /** Get truck list */
        const trucks = ads.map((truckElem) => {
            let truckSection = truckElem.children[0].children[0];
            /** Parse id, title, price */
            let id = truckElem.children[0].attribs[adIdAttr].trim();
            let title = truckSection.children[1].children[0].children[0].children[0].data.trim();
            let price = truckSection.children[3].children[1].children[1].attribs[adPriceAttr].trim();
            /** Parse power, mileage, registration date */
            let truckPropertyDiv = truckSection.children[2].children[1].children;
            let mileage = "", power = "", registrationDate = "";
            truckPropertyDiv.map((dd) => {
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
        return trucks;
    }
    catch (err) {
        logger_1.logger.error(`${successErrorMessages_1.errorMessages.scrapeTruckItemFailed} ${err}`);
    }
}
exports.scrapeTruckItem = scrapeTruckItem;
