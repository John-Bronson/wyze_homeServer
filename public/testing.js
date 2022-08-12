function testing() {
  console.log('hello world')

  fetch('http://192.168.1.61:3000/lights/',
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