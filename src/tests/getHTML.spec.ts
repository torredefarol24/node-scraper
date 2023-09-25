import { expect } from "chai";
import { testingParams, timeOutLimits } from "../config/testingParams";
import { getHTML } from "../utils/htmlFetcher";

/** Function to resolve promise for testing purposes */
function _getHTML(url: string) {
	return new Promise(function (resolve, reject) {
		const data = getHTML(url);
		resolve(data);
	});
}

/** Test cases for scraping */
describe("Scraping from any valid URL", () => {
	it("should return HTML from correct URL", (done) => {
		_getHTML(testingParams.urlWithNoPagination)
			.then((data: any) => {
				expect(data).to.be.string;
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.getHTML);

	it("should return null from incorrect URL", (done) => {
		_getHTML(testingParams.incorrectURL)
			.then((data: any) => {
				expect(data).to.be.null;
				done();
			})
			.catch((err: any) => {
				done();
			});
	}).timeout(timeOutLimits.getHTML);
});
