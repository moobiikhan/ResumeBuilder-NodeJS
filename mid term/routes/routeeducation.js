const express = require("express")
const router = express.Router();
var educationcontroller = require("../controller/educationcontroller");


router.get("/test", educationcontroller.test)

router.put("/addeducation", educationcontroller.create)

router.put("/:id/updateeducation", educationcontroller.update)

router.delete("/:id/deleducation", educationcontroller.delete)

router.get("/fields", educationcontroller.details)


module.exports = router;
