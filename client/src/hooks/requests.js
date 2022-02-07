const URL = "http://localhost:8000"

async function httpGetPlanets() {
  const response = await fetch(`${URL}/planets`)
  return await response.json()
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${URL}/launches`)
  const fethcedLaunches = await response.json()
  return fethcedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber
  })
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${URL}/launches`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(launch),
    })
  } catch (err) {
    return { ok: false }
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  console.log("id i n fe", id)
  try {
    return await fetch(`${URL}/launches/${id}`, {
      method: "delete",
    })
  } catch (err) {
    return { ok: false }
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch }
