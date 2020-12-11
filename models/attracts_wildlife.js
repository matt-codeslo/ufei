const knex = require("../DAL/connection");
const logger = require("../utilities/logger");

exports.fetchById = async (id) => {
  try {
    const result = await knex("attracts_wildlife").where({
      attracts_wildlife_id: id,
    });
    return result;
  } catch (err) {
    logger.error(`models.attracts_wildlife.fetchById: ${err}`);
  }
};

exports.fetchAll = async () => {
  try {
    const result = await knex("attracts_wildlife");
    return result;
  } catch (err) {
    logger.error(`models.attracts_wildlife.fetchAll: ${err}`);
  }
};

exports.updateById = async (id, updateObj) => {
  // todo
};

exports.deleteById = async (id) => {
  try {
    knex("attracts_wildlife").where({ attracts_wildlife_id: id }).del();
    return true;
  } catch (err) {
    logger.error(`models.attracts_wildlife.deleteById: ${err}`);
  }
};
