const {getMobile,postMobile,putMobile,deleteMobile} = require("../controller/mobileController")
const route = require("express").Router()

route.get("/",getMobile)
route.post("/",postMobile)
route.put("/:id",putMobile)
route.delete("/:id",deleteMobile)

module.exports = route