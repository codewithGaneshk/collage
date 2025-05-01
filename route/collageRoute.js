const {getCollage,postCollage,putCollage,deleteCollage} = require("../controller/collageController")
const route = require("express").Router()

route.get("/",getCollage)
route.post("/",postCollage)
route.put("/:id",putCollage)
route.delete("/:id",deleteCollage)

module.exports = route