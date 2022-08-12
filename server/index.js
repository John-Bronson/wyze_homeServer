const Wyze = require('wyze-node')
require('dotenv').config()
//import Wyze from './wyze.js'

const express = require('express')
const app = express()
const port = 3000

app.get('/lights/', (req, res) => {
  officeLights()
  res.send('Hello World!')
})

const path = require('path')
app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`Wyze Household Server listening on port ${port}`)
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