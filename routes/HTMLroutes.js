const path = require("path");
const fs = require("fs");

const application = function () {
    fs.readFile("db/db.json","utf8", (err, data) =>{
        if (err) throw err;
        
    })
}

module.exports = application;