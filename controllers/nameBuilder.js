const logger = require("../utilities/logger");
const nameBuilder = require("../utilities/scientificNameBuilder");

exports.nameBuilder = async (req, res) => {
    try {
        const snb = nameBuilder;
        await snb()
            .then(data => {
                if (data) {
                    res.json({ data: data });
                } else {
                    throw new Error('no data');
                }
            });

    } catch (err) {
        logger.error(`controllers.nameBuilder.nameBuilder: ${err}`);
        res.status(500);
        res.json({ error: `${err}` });
    }
}