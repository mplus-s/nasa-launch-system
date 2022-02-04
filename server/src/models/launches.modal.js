const launches = new Map()
latestFlightNumber = 100
const launch = {
  flightNumber: 100,
  mission: "Keplers Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27,2030"),
  target: "kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
}
launches.set(launch.flightNumber, launch)
function getAllLaunches() {
  return Array.from(launches.values())
}
function addNewLaunch(launch) {
  latestFlightNumber++
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      upcoming: true,
      success: true,
      customer: ["zero to mastery", "Nasa"],
    })
  )
}
module.exports = {
  getAllLaunches,
  addNewLaunch,
}
