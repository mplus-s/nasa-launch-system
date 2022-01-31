const fs = require("fs")
const path = require("path")
const parse = require("csv-parse")
const { resolve } = require("path")
const habitablePlanets = []

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  )
}

const loadPlanetData = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data)
        }
      })
      .on("error", (err) => {
        reject(err)
      })
      .on("end", () => {
        resolve()
      })
  })
}

// fs.createReadStream("../../data/kepler_data.csv")
//   .pipe(parse({ coment: "#", columns: true }))
function getAllPlanets() {
  return habitablePlanets
}
module.exports = {
  loadPlanetData,
  getAllPlanets,
}
