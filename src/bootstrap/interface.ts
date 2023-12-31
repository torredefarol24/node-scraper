export interface IScrapeParams {
	dataTestIdAttr: string;
	itemListParentAttr: string;
	itemFilterAttr: string;
	currentPageClass: string;
	nextPageAttr: string;
	adIdAttr: string;
	adHrefAttr: string;
	adPriceAttr: string;
	adParameterAttr: string;
	adPowerAttr: string;
	adRegDateAttr: string;
	adMileageAttr: string;
}

export interface IItem {
	id: string;
	url: string;
}

export interface IPage {
	page: number;
	url: string;
}

export interface IAdCount {
	totalAdCount: any;
	pageHTML?: any;
}

export interface ISearchResults {
	adsFound: boolean;
	ads: any[];
	pageHTML: string;
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
