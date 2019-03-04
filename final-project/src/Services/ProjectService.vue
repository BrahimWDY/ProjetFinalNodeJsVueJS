<script>
    // je récupère mon api
    const myApiUrl = 'http://localhost:3000/api/v1/projet/'

    export default {
        // cette fonction nous permet de récupérer tout les projets de notre BDD
        getProjects () {
            return fetch(myApiUrl)
                .then((response) => {
                    return response.json()
                })
        },
        // cette fonction nous permet de créer et de mettre notre projet dans la BDD
        createProject (NomProjet, ProjectDesc, DateDebut, DateFin, MontantTotal, Statut) {
            return fetch(myApiUrl, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "NomProjet":NomProjet,
                        "ProjectDesc":ProjectDesc,
                        "DateDebut": DateDebut,
                        "DateFin": DateFin,
                        "MontantTotal": MontantTotal,
                        "Statut": Statut
                    }
                )
            })
                .then((response) => {
                    console.log(response)
                    return response.json()
                })
        },
        // cette fonction nous permet de supprimer un projet avec son id
        deleteProduct (id) {

            return fetch(myApiUrl + id, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
                })
                .then((response) => {
                    console.log(response)
                    return response.json()
                })
        },
        // cette fonction nous permet de modifier notre projet
        UpdateProject (id, NomProjet, ProjectDesc, DateDebut, DateFin, MontantTotal, Statut) {
            return fetch(myApiUrl + id, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "NomProjet": NomProjet,
                        "ProjectDesc": ProjectDesc,
                        "DateDebut": DateDebut,
                        "DateFin": DateFin,
                        "MontantTotal": MontantTotal,
                        "Statut": Statut,
                    }
                )
            })
                .then((response) => {
                    return response.json()
                })
        },
        // cette fonction nous permet de recuperer 1 projet grace à son id
        getProject (id) {
            return fetch(myApiUrl + id)
                .then((response) => {
                    return response.json()
                })
        },

        // Recupérer le nombre de projet

        getProjectCount () {
            return fetch(myApiUrl).then((response) => {
                return response.json()
            })
        }

    }



</script>
