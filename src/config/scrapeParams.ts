// Define params for scraping multiple businesses
export const XYZParams = {
	scrapeUrl: "another_url",
	htmlParams: {},
};

// Set params for scraping web
export const OTOMOTOParams = {
	scrapeUrl:
		"https://www.otomoto.pl/ciezarowe/uzytkowe/mercedes-benz/od-2014/q-actros?search%5Bfilter_enum_damaged%5D=0&search%5Border%5D=created_at%3Adesc",
	htmlParams: {
		itemListParentAttr: '[data-testid="search-results"]',
		itemFilterAttr: '[data-testid="applied-filters"]',
		adIdAttr: "data-id",
		adUrlAttr: "href",
		adPriceAttr: "data-price",
		adParameterAttr: "data-parameter",
		adMileageAttr: "mileage",
		adPowerAttr: "engine_power",
		adRegDateAttr: "year",
	},
};
