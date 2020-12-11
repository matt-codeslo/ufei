const express = require("express");
const router = express.Router();
const searchController = require("../controllers/search");
const treeDetailContoller = require("../controllers/treeDetail");
const nameBuilderController = require("../controllers/nameBuilder");


router.get("/search-by-name", searchController.searchByName);
router.get("/tree-detail/:treeId", treeDetailContoller.getTreeDetails);
router.get("/name-builder", nameBuilderController.nameBuilder);
router.get("/get-tree-id-array", searchController.getTreeIdArray);

module.exports = router;