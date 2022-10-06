const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const pedals = {
  empress: {},
  zvez: {},
  boss: {},
  strymon: {},
  line6: {},
  "tc electronix": {},
  "electro-harmonix": {},
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:pedalName", (req, res) => {
  const pedalName = req.params.pedalName.toLowerCase();
  if (pedals[pedalName]) {
    res.json(pedals[pedalName]);
  } else {
    res.json(pedal["not found"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on PORT ${PORT}! YOU BETTER GO CATCH IT!`);
});
