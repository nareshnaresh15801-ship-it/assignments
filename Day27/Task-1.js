fetch("https://github.com/nareshnaresh15801")
  .then(response => response.json())
  .then(data => {
    console.log("GitHub Profile Data:");
    console.log(data);
  })
  .catch(error => console.log("Error:", error));