export const XYZ_PARAMS = {
	SCRAPE_URL: "another_url",
	HTML_PARAMS: {},
};

export const OTOMOTO_PARAMS = {
	SCRAPE_URL:
		"https://www.otomoto.pl/ciezarowe/uzytkowe/mercedes-benz/od-2014/q-actros?search%5Bfilter_enum_damaged%5D=0&search%5Border%5D=created_at%3Adesc",
	HTML_PARAMS: {
		PARENT_ELEM_ATTR: '[data-testid="search-results"]',
		AD_ID_ATTR: "data-id",
		AD_URL_ATTR: "href",
	},
};
