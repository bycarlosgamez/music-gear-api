const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const pedals = {};

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on PORT ${PORT}! YOU BETTER GO CATCH IT!`);
});
