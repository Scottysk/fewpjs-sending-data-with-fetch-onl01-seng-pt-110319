function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
  let formData = {
    name: name,
    email: email
  };
  
    let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };


  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object['id']
  })

}


