const knex = require("../DAL/connection");
const logger = require("../utilities/logger");

exports.getCommonName = async (treeId) => {
    return knex.select('common.common')
        .from('common')
        .where('common.tree_id', '=', treeId)
        .catch(err => {
            logger.error(`models.common.getCommonName: ${err}`);
            return false;
        });
}

exports.getOtherCommonNames = async (treeId) => {
    const otherCommonNames = await knex.select('common.common')
        .from('common')
        .whereNull('common.sequence')
        .andWhere('common.tree_id', '=', treeId)
        .then(response => {
            if (response) {
                if (response.length) {
                    let responseArray = [];
                    for (let c of response) {
                        responseArray.push(c.common);
                    }
                    return responseArray;
                } else {
                    return response;
                }
            } else {
                throw ('get')
            }

        })
        .catch(err => {
            logger.error(`models.common.getOtherCommonNames: ${err}`);
        });

    return otherCommonNames;
}