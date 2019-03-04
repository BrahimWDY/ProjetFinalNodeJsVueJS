const Projet = require ('../models/projet.model.js');
const fs = require('fs');


// créer un projet

exports.createProject = (req, res) => {

    let projet =  new Projet ({
        NomProjet: req.body.NomProjet,
        ProjectDesc: req.body.ProjectDesc,
        DateDebut: req.body.DateDebut,
        DateFin: req.body.DateFin,
        MontantTotal: req.body.MontantTotal,
        Statut: req.body.Statut
    });
    projet.save((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Projet Créer !');
        }
        res.send(projet);
    })

}


// afficher tout les projets

exports.getProject = (req, res) => {
    Projet.find((err, projet) => {
        if (err){
            console.log(err);
        }
        res.send(projet);
    })
}

// Afficher le détails d'un projet

exports.getProjectById = (req, res) => {
    Projet.findById(req.params.id, (err, projet) => {
        if (err){
            console.log(err);
        }
        res.send(projet);
    })
}


// Modifier un projet

exports.UpdateProject = (req, res) => {

    Projet.findByIdAndUpdate(req.params.id, req.body, (err, projet) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Projet mis à jour !");
        }
        res.send(projet);
    })
}


// Supprimer un projet

exports.removeProject = (req, res) => {
    Projet.findByIdAndRemove(req.params.id, req.body, (err, projet) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Projet supprimé !");
        }
        res.send(projet);

    })
}

// afficher le total de projet
exports.getProjectCount = (req, res) => {
    Projet.count((function(err,count){
        if (err){
            console.log(err);
        }
        res.send(count);
    }))
}

