const Client = require ('../models/client.model.js');
const fs = require('fs');


// créer un client

exports.createClient = (req, res) => {

    let client =  new Client ({
        NomEntreprise: req.body.NomEntreprise,
        Adresse: {
            Rue : req.body.Adresse.Rue,
            Ville : req.body.Adresse.Ville,
            CP : req.body.Adresse.CP,
        },
        ContactRef: {
            nom : req.body.ContactRef.nom,
            prenom : req.body.ContactRef.prenom,
            Telephone : req.body.ContactRef.Telephone,
            mail: req.body.ContactRef.mail

        },
        Secteur: req.body.Secteur
    });
    client.save((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Client ajouté !');
            //console.log(client);
        }
        res.send(client);
    })

}


// afficher tout les clients

exports.getClient = (req, res) => {
    Client.find((err, client) => {
        if (err){
            console.log(err);
        }
        res.send(client);
    })
}

// Afficher le détails d'un client

exports.getClientById = (req, res) => {
    Client.findById(req.params.id, (err, client) => {
        if (err){
            console.log(err);
        }
        res.send(client);
    })
}


// Modifier un client

exports.UpdateClient = (req, res) => {
    Client.findByIdAndUpdate(req.params.id, req.body, (err, client) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Client mis à jour !");
        }
        res.send(client);

    })
}


// Supprimer un client

exports.removeClient = (req, res) => {
    Client.findByIdAndRemove(req.params.id, req.body, (err, client) => {

        if (err){
            console.log(err);
        }
        else{
            console.log("Client supprimé !");
        }
        res.send(client);

    })
}

// afficher le total de Client
exports.getClientCount = (req, res) => {
    Client.count((function(err,count){
        if (err){
            console.log(err);
        }
        res.send(count);
    }))
}

