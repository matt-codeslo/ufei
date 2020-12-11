const knex = require("../DAL/connection");
const logger = require("../utilities/logger");


exports.getSunsetZonesByTreeId = async (treeId) => {
    const sunsetZones = await knex.select('sunset_zone')
        .from('sunset_zone')
        .where('sunset_zone.tree_id', '=', treeId)
        .catch(err => {
            logger.error(`models.sunset_zones.getSunsetZonesByTreeId: ${err}`);
            return false;
        })

    return sunsetZones;
}