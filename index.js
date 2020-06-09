function submitData(name, email) {
  let formData = {
    name: "name",
    email: "email"
  };
  
    let configObj = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(submitData)
  };

}


