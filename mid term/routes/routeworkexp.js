const express = require("express")
const router = express.Router();
var workexpcontroller = require("../controller/workexpcontroller")


router.get("/test", workexpcontroller.test)

router.put("/addworkexp", workexpcontroller.create)

router.put("/:id/updateaddworkexp", workexpcontroller.update)

router.delete("/:id/delworkexp", workexpcontroller.delete)

router.get("/fields", workexpcontroller.details)

module.exports = router;