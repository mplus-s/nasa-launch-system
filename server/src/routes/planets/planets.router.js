const express = require("express")

const { httpGetAllPlanets } = require("./planets.controller")
const planentRouter = express.Router()

planentRouter.get("/planets", httpGetAllPlanets)
module.exports = planentRouter
