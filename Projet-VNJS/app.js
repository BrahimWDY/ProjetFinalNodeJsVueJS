// on récupère express
const express = require ('express');

// on récupère mongoose

const mongoose = require ('mongoose');

const bodyParser = require ('body-parser');
const cors = require ('cors');

const clientController = require ('./controllers/client.controller.js');
const projetController = require ('./controllers/projet.controller.js');
const salarieController = require ('./controllers/salarie.controller.js');

const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:8080'}));

app.use( function (req, res , next) {
    res.setHeader('Content-type','application/json');
    res.setHeader('Accept','application/json');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PATCH,OPTIONS,PUT');
    res.setHeader('Access-Control-Allow-Headers','Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin');
    next();
});


// on se connecte a la base de donnée

mongoose.connect('mongodb://brahim:admin123@ds139435.mlab.com:39435/final-project', { useNewUrlParser : true }, (error) => {
    if (error) {
        console.log('DataBase not connected!');
    }
    else {
        console.log('DataBase connected!');
    }
})


// Page d'accueil
app.get('/', (req,res) =>{
    res.send('Hello World!' );
});

// Route Clients
app.post('/api/v1/client', clientController.createClient);
app.get('/api/v1/client', clientController.getClient);
app.get('/api/v1/client/:id', clientController.getClientById);
app.put('/api/v1/client/:id', clientController.UpdateClient);
app.delete('/api/v1/client/:id', clientController.removeClient);

// Route Projets

app.post('/api/v1/projet', projetController.createProject);
app.get('/api/v1/projet', projetController.getProject);
app.get('/api/v1/projet/:id', projetController.getProjectById);
app.put('/api/v1/projet/:id', projetController.UpdateProject);
app.delete('/api/v1/projet/:id', projetController.removeProject);

// Route Salariés

app.post('/api/v1/salarie', salarieController.createSalarie);
app.get('/api/v1/salarie', salarieController.getSalarie);
app.get('/api/v1/salarie/:id', salarieController.getSalarieById);
app.put('/api/v1/salarie/:id', salarieController.UpdateSalarie);
app.delete('/api/v1/salarie/:id', salarieController.removeSalarie);

// Server

const port = 3000;

app.listen(port, () => {
    console.log(`Server on on port ${port}`);
})