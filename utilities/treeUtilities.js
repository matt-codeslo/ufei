const knex = require("../DAL/connection");
const { clearCounters } = require("../DAL/connection");
const logger = require("../utilities/logger");

// TODO - error handling for all methods

exports.exposureTranslator = (rating) => {
    try {
        let response = "";

        switch (rating) {
            case 1:
                response = "Full Shade"
                break;
            case 2:
                response = "Partial Shade"
                break;
            case 3:
                response = "Full Sun"
                break;
            default:
                logger.error(`utilities.treeUtilities.exposureTranslator: invalid rating`);
                response = null;

        }

        return response;
    } catch (err) {
        logger.error(`utilities.treeUtilities.exposureTranslator: ${err}`);
        return null;
    }


}

exports.phTranslator = (rating) => {
    try {
        let response;

        switch (rating) {
            case 1:
                response = "Very Acidic"
                break;
            case 2:
                response = "Acidic"
                break;
            case 3:
                response = "Slightly Acidic"
                break;
            case 4:
                response = "Neutral"
                break;
            case 5:
                response = "Slightly Alkaline"
                break;
            case 6:
                response = "Alkaline"
                break;
            case 7:
                response = "Very Alkaline"
                break;
            default:
                logger.error(`utilities.treeUtilities.phTranslator: invalid rating`);
                response = null;
                break;
        }

        return response;

    } catch (err) {
        logger.error(`utilities.treeUtilities.phTranslator: ${err}`);
        return null;
    }

}

exports.sunsetZoneFormatter = (sunsetArray) => {
    try {
        function getRanges(arr) {
            arr.sort((a, b) => a - b);
            function pushResult() {
                if (highNum !== -1) {
                    // there's a range
                    responseArray.push(`${lowNum} - ${highNum}`)
                } else {
                    // no range;
                    responseArray.push(`${lowNum}`);
                }
            }

            let responseArray = [];
            let NaNArray = [];
            let lowNum = -1;
            let highNum = -1;
            for (let i = 0; i < arr.length; i++) {
                let nextNum = parseInt(arr[i]);
                if (isNaN(nextNum)) {
                    // sunsetZone is something that can't be converted into a number. For example "H1"
                    NaNArray.push(arr[i]);

                } else {
                    if (lowNum === -1) {
                        // if lowNum isn't set, set it to nextNum
                        lowNum = nextNum;
                    } else if (nextNum === lowNum + 1) {
                        // nextNum is consecutive
                        highNum = nextNum
                    } else if (nextNum === highNum + 1) {
                        // still in range
                        highNum = nextNum;
                    } else {
                        pushResult();
                        // reset lowNum and highNum
                        lowNum = nextNum;
                        highNum = -1;
                    }

                }
                // check for end of array
                if (i === arr.length - 1) {
                    pushResult();
                    lowNum = -1;
                    highNum = -1;
                    // any NaN results? Push them now
                    if (NaNArray.length) {
                        NaNArray.forEach(e => {
                            responseArray.push(e);
                        });
                    }
                }
            }

            return responseArray;
        }

        return getRanges(sunsetArray);
    } catch (err) {
        logger.error(`utilities.treeUtilities.sunsetZoneFormatter: ${err}`);
        return [];
    }


}

exports.soilTextureFormatter = (soilTextures) => {
    try {
        let responseArray = [];
        for (let s of soilTextures) {
            responseArray.push(s.soil_texture);
        }

        return responseArray;
    } catch (err) {
        logger.error(`utilities.treeUtilities.soilTextureFormatter: ${err}`);
        return [];
    }

}

exports.propertyArrayFlattener = (arr, prop) => {
    try {
        if (!arr || !prop) {
            logger.error(`utilities.treeUtilities.propertyArrayFlattener: invalid arr or prop - arr: ${arr}, prop: ${prop}`);
            return [];
        }
        // flatten array of objects
        let responseArray = [];
        for (let e of arr) {
            responseArray.push(e[prop]);
        }

        return responseArray;
    } catch (err) {
        logger.error(`utilities.treeUtilities.propertyArrayFlattener: ${err}`);
        return [];
    }

}