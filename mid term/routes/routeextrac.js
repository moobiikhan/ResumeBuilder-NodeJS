const express = require("express")
const router = express.Router();
var extraccontroller = require("../controller/extraccontroller")


router.get("/test", extraccontroller.test)

router.put("/addextrac", extraccontroller)

router.put("/:id/updateextrac", extraccontroller)

router.delete("/:id/delextrac", extraccontroller)

router.get("/fields", extraccontroller)
module.exports = router;