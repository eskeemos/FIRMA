const express = require("express");

const app = express();
const https = require('https').createServer(app);
const PORT = process.env.PORT || 3000;

https.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

app.get("/", (req, res) => {
  res.send('running...');
})