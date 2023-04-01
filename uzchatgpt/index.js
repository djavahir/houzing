const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const configuration = new Configuration({
 organization: "org-smwbRDcjSDILZfrOikhiyeku",
 apiKey: "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",
})
const openai = new OpenAIApi(configuration)



const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 8080

app.post("/", async (req, res) => {
 const { message } = req.body
 const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: message,
  max_tokens: 7,
  temperature: 0,
 })
 res.json(response.data.choices[0].text)
})


app.listen(port, () => { 
 console.log(`Server running on ${port}`);
})