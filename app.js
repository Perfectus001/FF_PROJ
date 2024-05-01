//Definition des modules a  utiliser
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;


//Utilisation du middleware body-parser pour le traitement des donnees
app.use(bodyParser.urlencoded({extended: true}));

//Utilisation du moteur de template ejs
app.set("view engine", "ejs");

//Definition du repertoire statique pour servir les fichiers css, images etc
app.use(express.static(path.join(__dirname, "public")));

//All in one
app.get('/',(req, res)=>{
    res.render("index", {title: "My Food"});
});

app.post('/commandeForm',(req, res)=>{
    const {name, firstname, } = req.body;
});