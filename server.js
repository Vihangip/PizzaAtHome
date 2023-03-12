const express = require('express');
const cors = require('cors');
const cohere = require('cohere-ai');
const app = express();
const port = 3000;

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
      prompt: 'Read the following and extract \"meeting_location\" and \"date\":\n\n' + data.msg + '\n\nOutput the extracted information in JSON form.',
      max_tokens: 300,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      stop_sequences: [],
      return_likelihoods: 'NONE'
    });
    const prediction = response.body.generations[0].text
    console.log(`Prediction: ${prediction}`);
    res.json({ Prediction: `${response.body.generations[0].text}` });
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});