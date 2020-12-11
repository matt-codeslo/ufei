const knex = require("../DAL/connection");
const logger = require("../utilities/logger");


exports.getSoilTexturesByTreeId = async (treeId) => {
    const soilTextures = await knex.select('soil_texture')
        .from('soil_texture')
        .where('tree_id', '=', treeId)
        .catch(err => {
            logger.error(`models.soil_texture.getSoilTexturesByTreeId: ${err}`);
            return false;
        })

    return soilTextures;
}