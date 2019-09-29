// Simple server to boot up the app and serve up index.html

const express = require("express");
const app = express();

// Display index.html from the root URL
app.get("/", function(req, res) {
  res.sendFile(__dirname, "index.html");
});

// Serve static files
// https://expressjs.com/en/starter/static-files.html
// https://expressjs.com/en/4x/api.html#express.static
app.use(express.static(__dirname));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(
    `Weather app listening on port ${port}!  Open app in browser at localhost:${port}.`
  )
);
