const express = require("express");

const app = express();

app.get("/api/automate", (req, res) => {
  res.send({
    message: "Automate all the things",
    timestamp: Date.now(),
  });
});

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.get("/status", (req, res) => {
  res.send("OK");
});

// Dynamic Port mapping
// protection wrapper for testing env
const PORT = process.env.port || 5000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT);
}
console.log(`Running on port 5000`);

module.exports = app;
