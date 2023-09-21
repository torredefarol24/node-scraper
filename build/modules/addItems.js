"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItems = void 0;
const cheerio = __importStar(require("cheerio"));
const scrapeParams_1 = require("../config/scrapeParams");
const logger_1 = require("../utils/logger");
const scrape_1 = require("../utils/scrape");
async function addItems() {
    try {
        // Parse HTML
        const pageHTML = await (0, scrape_1.getHTML)();
        const $ = cheerio.load(pageHTML);
        // Select HTML elem by attr
        const $AD_LIST = $(scrapeParams_1.ITEMS_LIST_PARAMS.PARENT_ELEM_ATTR);
    }
    catch (err) {
        logger_1.logger.error(`AddItems Failed ${err}`);
    }
}
exports.addItems = addItems;
