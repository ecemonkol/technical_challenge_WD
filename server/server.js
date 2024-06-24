const express = require("express");
const app = express();
const port = 3001;

const phones = require("./data/phones.json");

// Root route to provide a welcome message
app.get("/", (req, res) => {
  res.send("Welcome to The Phone Cave API!");
});

// Route to get all phones
app.get("/phones", (req, res) => {
  res.json(phones.price);
});

// Route to get a phone by id
app.get("/phones/:id", (req, res) => {
  const phone = phones.find((p) => p.id === parseInt(req.params.id));
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).send("Phone not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
