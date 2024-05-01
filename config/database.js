//Configuration de la connexion a la base de donnees
const db = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestionfastfood'
});

module.exports = db;