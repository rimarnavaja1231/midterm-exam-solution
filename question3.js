// import the express module
const express = require("express");

// create an Express application
const app = express();

// define a route for /test
app.get("/test", (req, res) => {
  // Send JSON response when /test is accessed
  res.json({ message: "Express is working! Rimar M. Navaja" });
});

// set the server to listen on port 3000
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
