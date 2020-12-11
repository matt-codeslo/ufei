const model = require("../models/tree");
const logger = require("../utilities/logger");
// models
const tree = require("../models/tree");
const { response } = require("express");


exports.searchByName = async (req, res) => {
    try {
        let searchString = req.query.searchString;
        await tree.getIdArrayBySearchString(searchString)
            .then(async (data) => {
                await tree.getPrimaryTreeSuggestions(data)
                    .then(response => {
                        res.json(response);
                    });
            })
            .catch(err => {
                throw new Error(err);
            });
    } catch (err) {
        logger.error(`controllers.search.searchByName: ${err}`);
        res.status(500);
        res.json({ message: `Server Error: api/searchByName` });
    }
}

exports.getTreeIdArray = async (req, res) => {
    try {
        let searchString = req.query.searchString;
        let response = [];
        await tree.getIdArrayBySearchString(searchString)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                throw new Error(err);
            });
    } catch (err) {
        logger.error(`controllers.search.getTreeIdArray: ${err}`);
        res.status(500);
        res.json({ message: `Server Error: api/getTreeIdArray` });
    }
}