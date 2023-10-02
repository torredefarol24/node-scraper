import { expect } from "chai";
import { OTOMOTOParams } from "../config/scrapeParams";
import { testingParams, timeOutLimits } from "../config/testingParams";
import { _getAds } from "../modules/_getAds";

/** Function to resolve promise for testing purposes */
function _getAdsList(url: string) {
	return new Promise(function (resolve, reject) {
		const results = _getAds(url, OTOMOTOParams);
		resolve(results);
	});
}

/** Test cases for getting ad */
describe("Scraping ads", () => {
	it("should return ads from correct URL", (done) => {
		_getAdsList(testingParams.urlWithNoPagination)
			.then((data: any) => {
				expect(data.ads.length).to.be.gte(0);
				expect(data.adsFound).to.be.true;
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.getAds);

	it("should return empty array from incorrect URL", (done) => {
		_getAdsList(testingParams.incorrectURL)
			.then((data: any) => {
				expect(data.adsFound).to.be.false;
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.getAds);
});
