// Dependencies
const express = require("express");

// Express configuration
//Tells node that we are creating an 'express' server
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
require("./routes/NoteapiRoutes")(app);
require("./routes/htmlRoutesNotes")(app);

app.listen(PORT, function () {
  console.log(`App listening on PORT: ${PORT}`);
});