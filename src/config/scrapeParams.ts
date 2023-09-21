export const XYZParams = {
	scrapeUrl: "another_url",
	htmlParams: {},
};

export const OTOMOTOParams = {
	scrapeUrl:
		"https://www.otomoto.pl/ciezarowe/uzytkowe/mercedes-benz/od-2014/q-actros?search%5Bfilter_enum_damaged%5D=0&search%5Border%5D=created_at%3Adesc",
	htmlParams: {
		parentElemAttr: '[data-testid="search-results"]',
		adIdAttr: "data-id",
		adUrlAttr: "href",
	},
};
