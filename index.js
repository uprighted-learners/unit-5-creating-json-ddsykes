const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

//const PORT = 3000;

app.get("/answer", (req, res) => {
  res.sendFile(path.join(__dirname, "api", "answers.json"));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
