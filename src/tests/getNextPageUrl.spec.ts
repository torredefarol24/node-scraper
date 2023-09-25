import { equal } from "assert";
import { expect } from "chai";
import { OTOMOTOParams } from "../config/scrapeParams";
import { testingParams, timeOutLimits } from "../config/testingParams";
import { getNextPageUrl } from "../modules/getNextPageUrl";

/** Function to resolve promise for testing purposes */
function _getNextPageURL(url: string) {
	return new Promise(function (resolve, reject) {
		const nextPageURL: any = getNextPageUrl(url, OTOMOTOParams);
		resolve(nextPageURL);
	});
}

/** Test cases for getting next page urls */
describe("Scraping next page urls", () => {
	it("should return a list with one url", (done) => {
		_getNextPageURL(testingParams.urlWithNoPagination)
			.then((data: any) => {
				equal(data.length, 1);
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.getNextPageURL);

	it("should return a list two urls", (done) => {
		_getNextPageURL(testingParams.urlWithTwoPages)
			.then((data: any) => {
				equal(data.length, 2);
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.getNextPageURL);

	it("should return a list with several urls", (done) => {
		_getNextPageURL(testingParams.initialScrapingURL)
			.then((data: any) => {
				expect(data.length).to.be.gte(2);
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.getNextPageURL);

	it("should return null from incorrect URL", (done) => {
		_getNextPageURL(testingParams.incorrectURL)
			.then((data: any) => {
				expect(data.length).to.be.null;
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.getNextPageURL);
});
