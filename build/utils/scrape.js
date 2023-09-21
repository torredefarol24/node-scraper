"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHTML = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const scrapeParams_1 = require("../config/scrapeParams");
const successErrorMessages_1 = require("../config/successErrorMessages");
const logger_1 = require("./logger");
function getHTML() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Launch an instance of the browser
            const browser = yield puppeteer_1.default.launch({
                headless: "new",
            });
            // Visit the url
            const page = yield browser.newPage();
            yield page.goto(scrapeParams_1.SCRAPE_URL);
            // Get HTML content of the page
            const pageHTML = yield page.evaluate(() => {
                return document.documentElement.innerHTML;
            });
            // Close browser for memory leaks
            // Return page HTML
            logger_1.logger.info(successErrorMessages_1.SUCCESS_MESSAGES.SCRAPING_DONE);
            yield browser.close();
            return pageHTML;
        }
        catch (err) {
            // For now, log the error
            // TO DO: throw error & catch in central error handler
            logger_1.logger.error(`${successErrorMessages_1.ERROR_MESSAGES.SCRAPING_FAILED} ${err}`);
        }
    });
}
exports.getHTML = getHTML;
