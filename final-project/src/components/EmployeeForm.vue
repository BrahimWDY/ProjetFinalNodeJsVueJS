<template>
    <div class="head">
        <div class="container card-header text-white bg-dark Bot40">
            <h1>Add employee</h1>
        </div>

        <div class="container Top50">
            <form>
                <div class="form-group">
                    <label>Nom</label>
                    <input type="text" class="form-control" v-model="Nom" placeholder="Entrez le nom...">
                </div>


                <div class="form-group">
                    <label>Prénom</label>
                    <input type="text" class="form-control" v-model="Prenom" placeholder="Entrez le prénom...">
                </div>

                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="Username" placeholder="Entrez un username...">
                </div>

                <div class="form-group">
                    <label>Date d'anniversaire</label>
                    <input type="text" class="form-control" v-model="Birthday" placeholder="Entrez une date de naissance. Exemple (01/01/1970)">
                </div>


                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Rue</label>
                    <input type="text" class="form-control" v-model="Rue" placeholder="Entrez la Rue..." >
                </div>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Ville</label>
                    <input type="text" class="form-control" v-model="Ville" placeholder="Entrez la ville..." >
                </div>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Code Postal</label>
                    <input type="number" class="form-control" v-model="CP" placeholder="Entrez le Code postal..." >
                </div>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Téléphone</label>
                    <input type="text" class="form-control" v-model="Telephone" placeholder="Entrez un numéro de téléphone..." >
                </div>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Adresse Mail</label>
                    <input type="email" class="form-control" v-model="Mail" placeholder="Entrez une adresse mail..." >
                </div>


                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Poste</label>
                    <select class="custom-select" v-model="Poste">
                        <option value="Chef de projet" >Chef de projet</option>
                        <option value="Développeur" >Développeur</option>
                        <option value="Commercial" >Commercial</option>
                        <option value="Intégrateur" >Intégrateur</option>
                    </select>
                </div>


                <button type="button" class="btn btn-primary" v-on:click="formData(Nom, Prenom, Username, Birthday, Rue, Ville, CP, Telephone, Mail, Poste)">Créer</button>
            </form>
        </div>
    </div>

</template>

<script>

    import EmployeeService from '../Services/EmployeeService.vue'

    export default {
        data () {
            return {
                Nom: '',
                Prenom: '',
                Username: '',
                Birthday: '',
                Rue: '',
                Ville: '',
                CP: '',
                Telephone: '',
                Mail: '',
                Poste: ''
            }
        },
        methods: {
            formData: function (Nom, Prenom, Username, Birthday, Rue, Ville, CP, Telephone, Mail, Poste) {
                EmployeeService.createEmployees(Nom, Prenom, Username, Birthday, Rue, Ville, CP, Telephone, Mail, Poste)
            }
        }
    }

</script>

<style>
    .Top50 {
        margin-top: 50px;
    }
</style>