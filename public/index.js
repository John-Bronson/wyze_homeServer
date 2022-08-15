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

function hello() {
  console.log('hello world!')
}