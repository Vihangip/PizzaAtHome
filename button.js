const button = document.getElementById('submitPizza');

button.addEventListener('click', () => {
    console.log("hi1");
    const userPrompt = document.getElementById('special-instruct').value;
    fetch('http://localhost:3000/button-clicked-2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({msg: userPrompt})
}).then(response => {console.log("hi2"); return response.json();})
    .then(data => console.log(data))
    .catch(error => console.error(error));
});