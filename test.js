console.log("hellow rodl");

const cohere = require('cohere-ai');
cohere.init('6Fdzo9FxYHFeQD8emNGOQRv292P5mAoMm8dy8Hyq'); // This is your trial API key
(async () => {
  const response = await cohere.generate({
    model: 'command-xlarge-nightly',
    prompt: 'Read the following and extract \"meeting_location\" and \"date\":\n\nI am available on weekdays except for Mondays. I can meet at Vancouver City Centre.\n\nOutput the extracted information in JSON form.',
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });
  console.log(`Prediction: ${response.body.generations[0].text}`);
})();

