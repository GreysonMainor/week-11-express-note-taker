const express =require("express")
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

require("./routes/route")(app);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname));
app.listen(PORT, function() {
    console.log("Listening on PORT:" + PORT)
});