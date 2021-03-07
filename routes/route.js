const path = require("path");
const fs = require("fs");

module.exports = app => {
    fs.readFile("db/db.json","utf8", (err, data) =>{
        if (err) throw err;

        var note = JSON.parse(data);

        app.get("/notes", function(req, res){
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
        app.get("/", function(req,res){
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        function dataBaseRefresh() {
            fs.writeFile("db/db.json", JSON.stringify(notes,"\t"),err => {
                if (err) throw err;
                return true;
            });
        };
        app.get("/api/notes", function(req, res){
            res.json(note);
        });
        app.post("/api/notes", function(req,res){
            let nextNote = req.body;
            note.push(nextNote);
            dataBaseRefresh();
            return console.log("added new note!")
        });
        app.get("/api/notes/:id", function(req,res){
            res.json(note[req.params.id]);
        });
        
    })
}
