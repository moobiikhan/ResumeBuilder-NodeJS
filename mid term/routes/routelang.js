const express = require("express")
const router = express.Router();
var langcontroller = require("../controller/langcontroller")


router.get("/test", langcontroller.test)

router.put("/addlang", langcontroller.create)

router.put("/:id/updatelang", langcontroller.update)

router.delete("/:id/dellang", langcontroller.delete)

router.get("/fields", langcontroller.details)
module.exports = router;