const timeStamp = new Date().toISOString().split("T");
const timeFormat = `[${timeStamp[0]} ${timeStamp[1].split(".")[0]}] :: `;

function info(message: any) {
	console.log(`${timeFormat}${message}`);
}

function error(message: any) {
	console.log(`\x1b[31m${timeFormat}${message}`);
}

export const logger = {
	info,
	error,
};
