const button = document.getElementById('submitPizza');

button.addEventListener('click', () => {
    console.log("hi1");
    const userPrompt = document.getElementById('special-instruct').value;

    // getting values from index.html
    // const addressType = document.getElementById("address").value;
    // const streetAddress = document.getElementById("street").value;
    // const suiteAptNo = document.getElementById("suite-apt").value;
    // const city = document.getElementById("suite-apt").value;
    // const province = document.getElementById("user-city").value;
    // const postalCode = document.getElementById("postal").value;
    
fetch('http://localhost:5500/button-clicked-2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({msg: userPrompt}),

        // // added
        // fields: JSON.stringify({field: addressType, streetAddress, suiteAptNo, city, province, postalCode})

}).then(response => {console.log("hi2"); return response.json();})
    .then(data => console.log(data))
    .catch(error => console.error(error));
});