// Interface for Platform to Scrape
export interface IHTMLParams {
	itemListParentAttr: string;
	itemFilterAttr: string;
	adIdAttr: string;
	adUrlAttr: string;
	adPriceAttr: string;
	adParameterAttr: string;
	adPowerAttr: string;
	adRegDateAttr: string;
	adMileageAttr: string;
}

export interface IScrapeParams {
	scrapeUrl: string;
	htmlParams: IHTMLParams;
}

// Interfcae for Ad / Truck etc
export interface IItem {
	id: string;
	url: string;
}

export interface ITruck {
	id: string;
	title: string;
	price: string;
	registrationDate: string;
	productionDate: string;
	mileage: string;
	power: string;
}
