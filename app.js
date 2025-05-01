const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const collageRoute = require("./route/collageRoute")
const bankRoute = require("./route/bankRoute")
const bikeRoute = require("./route/bikeRoute")
const clothRoute = require("./route/clothsRoute")
const mobileRoute = require("./route/mobileRoute")

const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    res.send("My Collage")
})

app.listen(5000)
app.use("/api/collage", collageRoute)
app.use("/api/bank",bankRoute)
app.use("/api/cloth",clothRoute)
app.use("/api/bike",bikeRoute)
app.use("/api/mobile",mobileRoute)



app.use(cors())


async function db() {
    try {
        const data = await mongoose.connect("mongodb+srv://ganesh:ganesh@cluster0.ftihr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )
        console.log(data.default.STATES.connected);
        

    } catch (error) {
        console.log(error.message);

    }
}
db()

