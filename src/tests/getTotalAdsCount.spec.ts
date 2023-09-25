import { expect } from "chai";
import { OTOMOTOParams } from "../config/scrapeParams";
import { testingParams, timeOutLimits } from "../config/testingParams";
import { getTotalAdsCount } from "../modules/getTotalAdsCount";

/** Function to resolve promise for testing purposes */
function _getTotalAdsCount(url: string) {
	return new Promise(function (resolve, reject) {
		const { totalAdCount }: any = getTotalAdsCount(url, OTOMOTOParams);
		resolve(totalAdCount);
	});
}

/** Test cases for getting ad counts */
describe("Scraping total Ad Count from initial scraping URL", () => {
	it("should return an integer from correct URL", (done) => {
		_getTotalAdsCount(testingParams.urlWithNoPagination)
			.then((count: any) => {
				expect(count).to.be.gte(0);
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.getTotalAdCount);

	it("should return null from incorrect URL", (done) => {
		_getTotalAdsCount(testingParams.incorrectURL)
			.then((count: any) => {
				expect(count).to.be.null;
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.getTotalAdCount);
});
