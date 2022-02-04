const path = require("path")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const planentRouter = require("./routes/planets/planets.router")
const launchesRouter = require("./routes/launches/launches.router")
//routes
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
}
const app = express()
app.use(cors(corsOptions))
app.use(morgan("combined"))
app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "public")))
app.use("/planets", planentRouter)
app.use("/launches", launchesRouter)
app.get("/*", (req, res) => {
  res.sendFile(path.join("..", "public", "index.html"))
})

module.exports = app
