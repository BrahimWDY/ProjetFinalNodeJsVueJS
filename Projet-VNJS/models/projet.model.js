// On appelle mongoose
const mongoose = require ('mongoose');

// On fait un schema qui nous permet de mapper la base de donnée
const Schema = mongoose.Schema;

let ProjetSchema =  new Schema ({
    NomProjet: String,
    ProjectDesc: String,
    DateDebut: String,
    DateFin: String,
    MontantTotal: Number,
    Statut: String
});

// On crée une classe qu'on va utiliser ailleurs
module.exports =  mongoose.model('Projet', ProjetSchema);

