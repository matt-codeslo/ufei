const { select } = require("../DAL/connection");
const knex = require("../DAL/connection");
const logger = require("../utilities/logger");

exports.getDrByTreeId = async (treeId) => {
    const dr = await knex.select('dr.disease_resistant')
        .from({ dr: 'disease_resistant' })
        .where('dr.tree_id', '=', treeId)
        .catch(err => {
            logger.error(`models.disease_resistant.getDrByTreeId: ${err}`);
            return false;
        });

    return dr;
}