const knex = require("../DAL/connection");
const logger = require("../utilities/logger");

const img_url = process.env.IMG_URL;

exports.getImageLinksByTreeId = async (treeId) => {

    return knex.select('link', 'sequence')
        .from('photo_link')
        .where('tree_id', '=', treeId)
        .orderBy('sequence')
        .then(response => {
            let responseArray = [];
            if (response.length) {
                for (let p of response) {
                    responseArray.push({ link: `${img_url}${p.link}`, sequence: `${p.sequence}` });
                }
                return responseArray;
            } else {
                return response;
            }

        }).catch(err => {
            logger.error(`models.photo_link.getImageLinkByTreeId: ${err}`);
            return false;
        })

}