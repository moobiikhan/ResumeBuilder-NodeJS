const express = require("express")
const router = express.Router();
var profilecontroller = require("../controller/profilecontroller");


router.get("/test", profilecontroller.test)

router.put("/modify", profilecontroller)

router.put("/details", profilecontroller)
module.exports = router;