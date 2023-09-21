export interface IHTML_Params {
	PARENT_ELEM_ATTR: string;
	AD_ID_ATTR: string;
	AD_URL_ATTR: string;
}

export interface IScrapeParams {
	SCRAPE_URL: string;
	HTML_PARAMS: IHTML_Params;
}
