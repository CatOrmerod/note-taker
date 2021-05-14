//Dependancies
const fs = require('fs');
const util = require('util');
const data = require('../db/db.json');

//Set variables
const writefileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

// ROUTING

module.exports = (app) => {
    // API GET Requests
    app.get('/api/notes', (req, res) => res.json(data));
    // API POST Requests
    app.post('/api/notes', (req, res) => res.json(data));
}