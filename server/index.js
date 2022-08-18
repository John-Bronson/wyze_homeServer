require('dotenv').config()
const Wyze = require('wyze-node')
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.SERVER_PORT

app.get('/officeLights/', (req, res) => {
  officeLights()
  res.send('Hello World!')
})

app.get('/bedroomLights/', (req, res) => {
  bedroomLights()
  res.send('Hello World!')
})

const options = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}
const wyze = new Wyze(options)

async function toggleDevice(device) {
  device.device_params.switch_state === 0 ? await wyze.turnOn(device) : await wyze.turnOff(device)
}

async function officeLights() {
  toggleDevice(await wyze.getDeviceByName('Color Bulb 1'))
  toggleDevice(await wyze.getDeviceByName('Color Bulb 2'))
}

async function bedroomLights() {
  toggleDevice(await wyze.getDeviceByName(`John's Night Light`))
  toggleDevice(await wyze.getDeviceByName(`Maria’s Night Light`))
}

app.listen(port, () => {
  console.log(`Wyze Household Server listening on port ${port}`)
})
app.use(express.static(__dirname + '/../dist'));