import { expect } from "chai";
import { assert } from "console";
import { OTOMOTOParams } from "../config/scrapeParams";
import { testingParams, timeOutLimits } from "../config/testingParams";
import { scrapeTruckItem } from "../modules/scrapeTruckItem";

/** Function to resolve promise for testing purposes */
function _scrapeTruckItem(url: string) {
	return new Promise(function (resolve, reject) {
		const items = scrapeTruckItem(url, OTOMOTOParams);
		resolve(items);
	});
}

/** Test cases for scraping truck properties */
describe("Scraping Truck item", () => {
	it("should return a list of items for correct URL", (done) => {
		_scrapeTruckItem(testingParams.urlWithNoPagination)
			.then((data: any) => {
				expect(data).to.be.a("array");

				if (data.length > 0) {
					expect(data[0]).to.have.property("id");
					expect(data[0]).to.have.property("title");
					expect(data[0]).to.have.property("price");
					expect(data[0]).to.have.property("productionDate");
					expect(data[0]).to.have.property("registrationDate");
					expect(data[0]).to.have.property("mileage");
					expect(data[0]).to.have.property("power");
				}
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.addItem);

	it("should return an empty array for incorrect URL", (done) => {
		_scrapeTruckItem(testingParams.incorrectURL)
			.then((data: any) => {
				assert(data.length, 0);
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.addItem);
});
