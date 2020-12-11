const knex = require("../DAL/connection");
const logger = require("../utilities/logger");

exports.fetchById = async (id) => {
  try {
    const result = await knex("model_name").where({
      model_name_id: id,
    });
    return result;
  } catch (err) {
    logger.error(`models.model_name.fetchById: ${err}`);
  }
};

exports.fetchAll = async () => {
  try {
    const result = await knex("model_name");
    return result;
  } catch (err) {
    logger.error(`models.model_name.fetchAll: ${err}`);
  }
};

exports.updateById = async (id, updateObj) => {
  // todo
};

exports.deleteById = async (id) => {
  try {
    knex("model_name").where({ model_name_id: id }).del();
    return true;
  } catch (err) {
    logger.error(`models.model_name.deleteById: ${err}`);
    return false;
  }
};
