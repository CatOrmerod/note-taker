//Dependancies
const fs = require('fs');
const util = require('util');
const data = require('../db/db.json');

// ROUTING

module.exports = (app) => {
    // API GET Requests
    app.get('/api/notes', (req, res) => res.json(data));
    // API POST Requests
    app.post('/api/notes', (req, res) => {
        data.push(req.body);
        fs.writeFileSync('db/db.json', JSON.stringify(data));
        res.json(true);
    });
}