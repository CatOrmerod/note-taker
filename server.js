// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

const app = express();
const PORT = process.env.PORT || 8080;

//Set variables
const writefileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));