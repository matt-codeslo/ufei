const logger = require("../utilities/logger");
const knex = require("../DAL/connection");
// models and modules
const treeDetailModule = require("../services/treeDetail");

exports.getTreeDetails = async (req, res) => {
    try {
        let treeId = req.params.treeId;
        const data = await treeDetailModule.getTreeDetails(treeId);
        if (data) {
            logger.info(`controllers.treeDetail.getTreeDetails: response sent`);
            res.json(data);
        } else {
            throw ("No data");
        }
    } catch (err) {
        logger.error(`controllers.treeDetail.getTreeDetails: ${err}`);
        res.status(500);
        res.json({ message: `Server Error` });
    }
} 