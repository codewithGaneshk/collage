const {getCloth,postCloth,putCloth,deleteCloth} = require("../controller/clothsController")
const route = require("express").Router()

route.get("/",getCloth)
route.post("/",postCloth)
route.put("/:id",putCloth)
route.delete("/:id",deleteCloth)

module.exports = route