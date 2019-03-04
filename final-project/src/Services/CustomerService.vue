<script>
    const myApiUrl = 'http://localhost:3000/api/v1/client/'

    export default {
        getCustomers () {
            return fetch(myApiUrl)
                .then((response) => {
                    return response.json()
                })
        },
        createCustomers (NomEntreprise, Rue, Ville, CP, RefNom, RefPrenom, RefTel, RefMail, Secteur) {
            return fetch(myApiUrl, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "NomEntreprise":NomEntreprise,
                        "Adresse": {
                            "Rue": Rue,
                            "Ville": Ville,
                            "CP": CP
                        },
                        "ContactRef": {
                            "nom":RefNom,
                            "prenom":RefPrenom,
                            "Telephone":RefTel,
                            "mail":RefMail
                        },
                        "Secteur":Secteur
                    }
                )
            })
                .then((response) => {
                    console.log(response)
                    return response.json()
                })
        },
        deleteCustomers (id) {

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

        UpdateCustomers (id, NomEntreprise, Rue, Ville, CP, RefNom, RefPrenom, RefTel, RefMail, Secteur) {
            return fetch(myApiUrl + id, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "NomEntreprise":NomEntreprise,
                        "Adresse":{
                            "Rue": Rue,
                            "Ville": Ville,
                            "CP": CP
                        },
                        "ContactRef": {
                            "nom":RefNom,
                            "prenom":RefPrenom,
                            "Telephone":RefTel,
                            "mail":RefMail
                        },
                        "Secteur":Secteur
                    }
                )
            })
                .then((response) => {
                    console.log(response)
                    return response.json()
                })
        },
        getCustomer (id) {
            return fetch(myApiUrl + id)
                .then((response) => {
                    return response.json()
                })
        },

        getClientCount () {
            return fetch(myApiUrl).then((response) => {
                return response.json()
            })
        }
    }
</script>
