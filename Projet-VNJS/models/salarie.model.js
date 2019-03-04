// On appelle mongoose
const mongoose = require ('mongoose');

// On fait un schema qui nous permet de mapper la base de donnée
const Schema = mongoose.Schema;

let SalarieSchema =  new Schema ({
    Nom: String,
    Prenom: String,
    Username: String,
    Birthday: String,
    Adresse: {
        Rue: String,
        Ville: String,
        CP: Number
    },
    Telephone: {type: String, match: /\d{10}/},
    Mail: String,
    Poste: String
});

// On crée une classe qu'on va utiliser ailleurs
module.exports =  mongoose.model('Salarie', SalarieSchema);

