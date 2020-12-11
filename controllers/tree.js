const model = require("../models/tree");
const logger = require("../utilities/logger");
const knex = require("../DAL/connection");

exports.fetchById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await model.fetchById(id);
    logger.info(
      `controllers.tree.fetchById: response sent: ${JSON.stringify(data)}`
    );
    res.json({ data });
  } catch (err) {
    logger.error(`controllers.tree.testConnection: ${err}`);
    res.status(500);
    res.send("Server Error");
  }
};

exports.fetchAll = async (req, res) => {
  try {
    const data = await model.fetchAll();
    logger.info(
      `controllers.tree.fetchAll: response sent: ${JSON.stringify(data)}`
    );
    res.json({ data });
  } catch (err) {
    logger.error(`controllers.tree.fetchAll: ${err}`);
    res.status(500).send("Server Error");
  }
};

exports.deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await model.deleteById(id);
    if (deleted) {
      logger.info(
        `controllers.tree.deleteById: response sent: {response: 'item with id ${id} deleted'}`
      );
      res.send({ response: `item with id ${id} deleted` });
    } else {
      throw new Error(`item with id ${id} not deleted`);
    }
  } catch (err) {
    logger.error(`controllers.tree.deleteById: ${err}`);
    res.status(500).send("Server Error");
  }
};

exports.testConnection = async (req, res) => {
  // testConnection is used in development to test the database connection
  try {
    const data = await model.testConnection();
    logger.info(
      `controllers.tree.testConnection: response sent: ${JSON.stringify(data)}`
    );
    res.json({ data });
  } catch (err) {
    logger.error(`controllers.tree.testConnection: ${err}`);
    res.status(500);
    res.send("Server Error");
  }
};
