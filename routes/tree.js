const express = require("express");
const router = express.Router();
const treeController = require("../controllers/tree");

router.get("/testConnection", treeController.testConnection);
router.get("/fetchById/:id", treeController.fetchById);
router.get("/fetchAll", treeController.fetchAll);
router.get("/deleteById/:id", treeController.deleteById);

module.exports = router;
