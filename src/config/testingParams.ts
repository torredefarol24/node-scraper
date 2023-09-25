import { initialScrapeURL } from "./scrapeParams";

export const timeOutLimits = {
	getTotalAdCount: 25000,
	getNextPageURL: 25000,
	addItem: 25000,
	getAds: 25000,
	getHTML: 10000
};

export const testingParams = {
	incorrectURL : "https://www.google.com",
	invalidURL : "123o",
	urlWithNoPagination : "https://www.otomoto.pl/ciezarowe/mercedes-benz/lubuskie",
	urlWithTwoPages :	"https://www.otomoto.pl/ciezarowe/mercedes-benz?search%5Bfilter_float_price%3Ato%5D=20000",
	initialScrapingURL : initialScrapeURL,
};
