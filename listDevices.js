const Wyze = require('wyze-node')

const options = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}
const wyze = new Wyze(options)


async function listDevices() {
  let device, state, result

  // Get all Wyze devices
  const devices = await wyze.getDeviceList()
  console.log(devices)
}

listDevices()