const knex = require("../DAL/connection");
const logger = require("../utilities/logger");

exports.getSalinityToleranceByTreeId = async (treeId) => {
    const salinityToleranceArray = await knex.select('salinity_tolerance')
        .from('salinity_tolerance')
        .where('tree_id', '=', treeId)
        .catch(err => {
            logger.error(`models.salinity_tolerance.getSalinityToleranceByTreeId: ${err}`);
            return false;
        });

    return salinityToleranceArray;
}