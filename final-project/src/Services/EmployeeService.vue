<script>
    const myApiUrl = 'http://localhost:3000/api/v1/salarie/'

    export default {
        getEmployees () {
            return fetch(myApiUrl)
                .then((response) => {
                    return response.json()
                })
        },
        createEmployees (Nom, Prenom, Username, Birthday, Rue, Ville, CP, Telephone, Mail, Poste) {
            return fetch(myApiUrl, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "Nom": Nom,
                        "Prenom": Prenom,
                        "Username": Username,
                        "Birthday": Birthday,
                        "Adresse":{
                            "Rue": Rue,
                            "Ville": Ville,
                            "CP": CP
                        },
                        "Telephone": Telephone,
                        "Mail": Mail,
                        "Poste":Poste
                    }
                )
            })
                .then((response) => {
                    console.log(response)
                    return response.json()
                })
        },
        deleteEmployees (id) {

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
        UpdateEmployees (id, Nom, Prenom, Username, Birthday, Rue, Ville, CP, Telephone, Mail, Poste) {
            return fetch(myApiUrl + id, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "Nom": Nom,
                        "Prenom": Prenom,
                        "Username": Username,
                        "Birthday": Birthday,
                        "Adresse": {
                            "Rue": Rue,
                            "Ville": Ville,
                            "CP": CP
                        },
                        "Telephone": Telephone,
                        "Mail": Mail,
                        "Poste":Poste
                    }
                )
            })
                .then((response) => {
                    return response.json()
                })
        },
        getEmployee (id) {
            return fetch(myApiUrl + id)
                .then((response) => {
                    return response.json()
                })
        },

        getEmployeeCount () {
            return fetch(myApiUrl).then((response) => {
                return response.json()
            })
        }
    }
</script>
