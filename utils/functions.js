const fs = require('fs');

//function to read data
const readData = () => {
    return JSON.parse(fs.readFileSync('db/db.json'))
}
//function to save date
const writeData = (data) => {
    fs.writeFileSync('db/db.json', JSON.stringify(data));
}

module.exports = {readData, writeData}