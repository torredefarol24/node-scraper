"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const logger_1 = require("./logger");
function handleError(err) {
    try {
        console.log("REACHED HERE");
        logger_1.logger.error(err);
    }
    catch (err) {
        logger_1.logger.error(`${err} 22`);
    }
}
exports.handleError = handleError;
