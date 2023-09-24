"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialScrapeURL = exports.DOMAIN = exports.OTOMOTOParams = void 0;
exports.OTOMOTOParams = {
    dataTestIdAttr: "data-testid",
    itemListParentAttr: "search-results",
    itemFilterAttr: "applied-filters",
    currentPageClass: ".pagination-item__active",
    nextPageAttr: "pagination-step-forwards",
    adIdAttr: "data-id",
    adHrefAttr: "href",
    adPriceAttr: "data-price",
    adParameterAttr: "data-parameter",
    adMileageAttr: "mileage",
    adPowerAttr: "engine_power",
    adRegDateAttr: "year",
};
exports.DOMAIN = "https://www.otomoto.pl";
exports.initialScrapeURL = "https://www.otomoto.pl/ciezarowe/uzytkowe/mercedes-benz/od-2014/q-actros?search%5Bfilter_enum_damaged%5D=0&search%5Border%5D=created_at%3Adesc";
