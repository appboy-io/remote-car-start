const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const droneClient = require('./droneClient')

app.post('/', async (req, res) => {
  const vehicleList = await droneClient.vehicles()
  const currentStatus = await droneClient.status(vehicleList[0].vehicle_name)
  console.log('Current Status:', currentStatus)
  const status = await droneClient.start(vehicleList[0].vehicle_name)

  res.send(status)
})

app.listen(port, () => {
  console.log('Drone Mobile service is on port:', port)
})
