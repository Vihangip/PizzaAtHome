const fileSystem = require("fs");

// getting values from index.html
var addressType = document.getElementById("address");
var streetAddress = document.getElementById("street");
var suiteAptNo = document.getElementById("suite-apt");
var city = document.getElementById("suite-apt");
var province = document.getElementById("user-city");
var postalCode = document.getElementById("postal");

const client = {
  "Address": {
    "Address Type": addressType,
    "Street Address": streetAddress,
    "Suite/Apartment Number": suiteAptNo,
    "City" : city,
    "Province" : province,
    "Postal Code": postalCode,
  },
}

const data = JSON.stringify(client);

fileSystem.writeFile("./newClient.json", data, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("JSON data is written to the file successfully");
  }
});


