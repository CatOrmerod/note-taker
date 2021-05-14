//Dependancies
const functions = require('../utils/functions')


// ROUTING
module.exports = (app) => {
    // API GET Requests
    app.get('/api/notes', (req, res) => {
        const data = functions.readData();
        res.json(data)
    });
    // API POST Requests
    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        const data = functions.readData();
        //use the current time/date as a unique id
        newNote.id = new Date().getTime();
        data.push(newNote);
        functions.writeData(data);
        res.json(true);
    });
    // API DELETE Requests
    app.delete('/api/notes/:id', (req, res) => {
        const data = functions.readData();
        for (let i = 0; i < data.length; i++) {
            if(data[i].id == req.params.id) {
                data.splice(i, 1);
                break;
            }
        }
        functions.writeData(data);
        res.json(true);
    })
}
