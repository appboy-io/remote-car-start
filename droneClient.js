const DroneMobile = require('drone-mobile')
const droneClient = new DroneMobile({
  username: process.env.DRONE_MOBILE_USER,
  password: process.env.DRONE_MOBILE_PASSWORD,
})

try {
  droneClient.on('ready', async () => {
    const vehicleList = await droneClient.vehicles()
  })

  droneClient.on('error', async () => {
    console.log('Error initiaing client')
  })
} catch (e) {
  console.log('client failed for reason:', e)
}

module.exports = droneClient
