function hello() {
  console.log('hello world!')
}

function toggleLights(endpoint) {
  fetch(`http://${SERVER_IP}:${SERVER_PORT}/${endpoint}/`,
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