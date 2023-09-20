"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const timeStamp = new Date().toISOString().split("T");
const timeFormat = `[${timeStamp[0]} ${timeStamp[1].split(".")[0]}] :: `;
function info(message) {
    console.log(`${timeFormat}${message}`);
}
function error(message) {
    console.log(`\x1b[31m${timeFormat}${message}`);
}
exports.logger = {
    info,
    error,
};
