const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")



router.post("/",userController.addEntry);
router.get("/",userController.getEntry);
router.put("/:id",userController.updateEntry);
router.delete("/:id",userController.deleteEntry);


module.exports = router;