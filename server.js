const express = require('express');
const cors = require('cors');
const cohere = require('cohere-ai');
const app = express();
const port = 1000;
const fs = require('fs');


app.use(cors());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.get('/button-clicked', async (req, res) => {
//   cohere.init('6Fdzo9FxYHFeQD8emNGOQRv292P5mAoMm8dy8Hyq'); // This is your trial API key
//   const response = await cohere.generate({
//     model: 'command-xlarge-nightly',
//     prompt: 'Read the following and extract \"meeting_location\" and \"date\":\n\nI am available on weekdays except for Mondays. I can meet at Vancouver City Centre.\n\nOutput the extracted information in JSON form.',
//     max_tokens: 300,
//     temperature: 0.9,
//     k: 0,
//     p: 0.75,
//     stop_sequences: [],
//     return_likelihoods: 'NONE'
//   });
//   const prediction = response.body.generations[0].text
//   console.log(`Prediction: ${prediction}`);
//   res.json({ Prediction: `${response.body.generations[0].text}` });
// });

app.post('/button-clicked-2', async (req, res) => {
    let data = req.body;
    console.log("data", data);
    cohere.init('6Fdzo9FxYHFeQD8emNGOQRv292P5mAoMm8dy8Hyq'); // This is your trial API key
    const response = await cohere.generate({
      model: 'command-xlarge-nightly',
      prompt: 'Read the following and extract \"time\" and\"meeting_location\" and \"date\":\n\n' + data.msg + '\n\nOutput the extracted information in JSON form.',
      max_tokens: 300,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      stop_sequences: [],
      return_likelihoods: 'NONE'
    });

    const prediction = response.body.generations[0].text
    console.log(`Prediction: ${prediction}`);

    // write the prediction data to a JSON file
    // previously response.body
    fs.writeFile('prediction.json', JSON.stringify(response.body), function (err) {
      if (err) throw err;
      console.log('Prediction data saved to prediction.json');
    });

    res.json({ Prediction: `${response.body.generations[0].text}` });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//     // write the prediction data to a JSON file
//     fs.writeFile('prediction.json', JSON.stringify(response.body), function (err) {
//         if (err) throw err;
//         console.log('Prediction data saved to prediction.json');
//       });
  
//       res.json({ Prediction: `${response.body.generations[0].text}` });
//   })
  
// THIS
//     const prediction = response.body.generations[0].text
//     console.log(`Prediction: ${prediction}`);
//     res.json({ Prediction: `${response.body.generations[0].text}` });

// })

  
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// THIS

    // fs.writeFile('data.json', JSON.stringify(res.json), (err) => {
    //     if (err) throw err;
    //     console.log('Data saved to file');
    // })

//     const fs = require('fs');

// app.post('/submit-form', (req, res) => {
//   const data = req.body;

//   // Do something with the form data, such as save it to a database

//   fs.writeFile('data.json', JSON.stringify(data), (err) => {
//     if (err) throw err;
//     console.log('Data saved to file');
//   });

//   res.json({ message: 'Form submitted successfully!' });
// });

// const express = require('express');
// const cors = require('cors');
// const cohere = require('cohere-ai');
// const app = express();
// const port = 1000;
// const fs = require('fs');

// app.use(cors());
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.post('/button-clicked-2', async (req, res) => {
//     let data = req.body;
//     console.log("data", data);
//     cohere.init('6Fdzo9FxYHFeQD8emNGOQRv292P5mAoMm8dy8Hyq'); // This is your trial API key
//     const response = await cohere.generate({
//       model: 'command-xlarge-nightly',
//       prompt: 'Read the following and extract \"time\" and\"meeting_location\" and \"date\":\n\n' + data.msg + '\n\nOutput the extracted information in JSON form.',
//       max_tokens: 300,
//       temperature: 0.9,
//       k: 0,
//       p: 0.75,
//       stop_sequences: [],
//       return_likelihoods: 'NONE'
//     });

//     const prediction = response.body.generations[0].text
//     console.log(`Prediction: ${prediction}`);

//     // write the prediction data to a JSON file
//     fs.writeFile('prediction.json', JSON.stringify(response.body), function (err) {
//       if (err) throw err;
//       console.log('Prediction data saved to prediction.json');
//     });

//     res.json({ Prediction: `${response.body.generations[0].text}` });
// })

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
