const express = require("express");

const app = express();

app.get("/api/automate", (req, res) => {
  res.send({
    message: "Automate all the things",
    timestamp: Date.now(),
  });
});

// Dynamic Port mapping
const PORT = process.env.port || 5000;
app.listen(PORT);
console.log("Listening on port 5000");
