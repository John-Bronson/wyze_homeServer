//require('dotenv').config()
import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import hello from './config.js'

const App = () => {

  function toggleLights(endpoint) {
    fetch(`http://localhost:3000/${endpoint}/`,
      {
        method: "GET",
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>

      <h1>Wyze Bulb Interface</h1>

      <div id="hello">
        <button onClick={() => hello()}>Hello</button>
      </div>

      <div id="officeLights">
        <button onClick={() => toggleLights('officeLights')}>John's Room</button>
      </div>

      <div id="bedroomLights">
        <button onClick={() => toggleLights('bedroomLights')}>Bedroom</button>
      </div>
    </div>
  )
}

const container = document.getElementById('app');
const root = createRoot(container)
root.render(<App />)
//ReactDOM.render(<App />, document.getElementById('app'));