const Salarie = require ('../models/salarie.model.js');
const fs = require('fs');


// créer un salarié

exports.createSalarie = (req, res) => {

    let salarie =  new Salarie ({
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Username: req.body.Username,
        Birthday: req.body.Birthday,
        Adresse:{
            Rue: req.body.Adresse.Rue,
            Ville: req.body.Adresse.Ville,
            CP: req.body.Adresse.CP
        },
        Telephone: req.body.Telephone,
        Mail: req.body.Mail,
        Poste: req.body.Poste,
    });
    salarie.save((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Salarié Créer !');
        }
        res.send(salarie);
    })

}


// afficher tout les salariés

exports.getSalarie = (req, res) => {
    Salarie.find((err, salarie) => {
        if (err){
            console.log(err);
        }
        res.send(salarie);
    })
}

// Afficher les détails d'un salarié

exports.getSalarieById = (req, res) => {
    Salarie.findById(req.params.id, (err, salarie) => {
        if (err){
            console.log(err);
        }
        res.send(salarie);
    })
}


// Modifier un salarié

exports.UpdateSalarie = (req, res) => {

    Salarie.findByIdAndUpdate(req.params.id, req.body, (err, salarie) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Salarié mis à jour !");
        }
        res.send(salarie);

    })
}


// Supprimer un salarié

exports.removeSalarie = (req, res) => {
    Salarie.findByIdAndRemove(req.params.id, req.body, (err, salarie) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Salarié supprimé !");
        }
        res.send(salarie);

    })
}

// afficher le total de Salariés
exports.getSalarieCount = (req, res) => {
    Salarie.count((function(err,count){
        if (err){
            console.log(err);
        }
        res.send(count);
    }))
}

