const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Good" });
});

app.listen(8080, (err) => {
  if (err) {
    console.error(err.message);
  }

  console.log("Server work at port 8080");
});
