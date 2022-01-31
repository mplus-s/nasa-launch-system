const http = require("http")

const app = require("./app")
const { loadPlanetData } = require("./models/planets.modal")
const PORT = process.env.PORT || 8000
const server = http.createServer(app)
const startServer = async () => {
  await loadPlanetData()
  server.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`)
  })
}
startServer()
