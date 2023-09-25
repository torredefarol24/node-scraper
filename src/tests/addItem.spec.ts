import { expect } from "chai";
import { assert } from "console";
import { OTOMOTOParams } from "../config/scrapeParams";
import { testingParams, timeOutLimits } from "../config/testingParams";
import { addItems } from "../modules/addItems";

/** Function to resolve promise for testing purposes */
function _addItem(url: string) {
	return new Promise(function (resolve, reject) {
		const items = addItems(url, OTOMOTOParams);
		resolve(items);
	});
}

/** Test cases for scraping ids/urls */
describe("Scraping Truck ids/urls", () => {
	it("should return a list of ids with urls for correct URL", (done) => {
		_addItem(testingParams.urlWithNoPagination)
			.then((data: any) => {
				expect(data).to.be.a("array");

				if (data.length > 0) {
					expect(data[0]).to.have.property("id");
					expect(data[0]).to.have.property("url");
				}
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.addItem);

	it("should return an empty array for incorrect URL", (done) => {
		_addItem(testingParams.incorrectURL)
			.then((data: any) => {
				assert(data.length, 0);
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.addItem);
});
