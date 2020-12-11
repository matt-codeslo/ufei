const knex = require("../DAL/connection");
const logger = require("../utilities/logger");

exports.getSynonyms = async (treeId) => {
    return await knex.select('name_concat')
        .from('taxon')
        .where('tree_id', '=', treeId)
        .andWhere('sequence', '!=', 1)
        .then(response => {
            if (response) {
                if (response.length) {
                    let responseArray = [];
                    for (let r of response) {
                        responseArray.push(r);
                    }
                    return responseArray;
                } else {
                    return response;
                }

            } else {
                throw ('error in getSynonyms');
            }

        })
        .catch(err => {
            logger.error(`models.taxon.getSynonyms: ${err}`);
            return false;
        });
}

exports.getGenus = async (treeId) => {
    return knex.select('genus')
        .from('taxon')
        .where('tree_id', '=', treeId)
        .catch(err => {
            logger.error(`models.taxon.getGenus: ${err}`);
            return false;
        });
}

exports.getScientificName = async (treeId) => {
    return knex.select('name_concat')
        .from('taxon')
        .where('tree_id', '=', treeId)
        .andWhere('sequence', '=', '1')
        .catch(err => {
            logger.error(`models.taxon.getScientificName: ${err}`);
            return false;
        });
}