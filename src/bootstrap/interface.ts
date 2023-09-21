export interface IHTMLParams {
	parentElemAttr: string;
	adIdAttr: string;
	adUrlAttr: string;
}

export interface IScrapeParams {
	scrapeUrl: string;
	htmlParams: IHTMLParams;
}

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
