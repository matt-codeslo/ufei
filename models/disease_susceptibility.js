const knex = require("../DAL/connection");
const logger = require("../utilities/logger");

exports.getDsByTreeId = async (treeId) => {
    const ds = await knex.select('ds.disease_susceptibility')
        .from({ ds: 'disease_susceptibility' })
        .where('ds.tree_id', '=', treeId)
        .catch(err => {
            logger.error(`modesl.disease_susceptibility.getDsByTreeId: ${err}`);
            return false;
        });

    return ds;
}