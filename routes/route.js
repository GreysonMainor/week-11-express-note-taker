const path = require("path");
const fs = require("fs");

module.exports = app => {
    fs.readFile("db/db.json","utf8", (err, data) =>{
        if (err) throw err;

        let note = JSON.parse(data);

        app.get("/notes", function(req, res){
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
        app.get("*", function(req,res){
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

    })
}

module.exports = app;