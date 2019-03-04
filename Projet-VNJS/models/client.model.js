// On appelle mongoose
const mongoose = require ('mongoose');

// On fait un schema qui nous permet de mapper la base de donnée
const Schema = mongoose.Schema;

let ClientSchema =  new Schema ({
    NomEntreprise: String,
    Adresse: {
        Rue: String,
        Ville: String,
        CP: Number
    },
    ContactRef: {
        nom: String,
        prenom: String,
        Telephone: {type: String, match: /\d{10}/},
        mail: String
    },
    Secteur: String
});

// On crée une classe qu'on va utiliser ailleurs
module.exports =  mongoose.model('Client', ClientSchema);

