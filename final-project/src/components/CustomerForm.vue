<template>
    <div class="head">
        <div class="container card-header text-white bg-dark Bot40">
            <h1>Add customer</h1>
        </div>

        <div class="container">
            <form>
                <h4 class="Top50">Entreprise</h4>
                <div class="form-group">
                    <label>Nom de l'entreprise</label>
                    <input type="text" class="form-control" v-model="NomEntreprise" placeholder="Entrez le nom de l'entreprise...">
                </div>

                <h4>Adresse</h4>

                <div class="form-group">
                    <label>Rue</label>
                    <input type="text" class="form-control" v-model="Rue" placeholder="Entrez le numéro et la rue...">
                </div>

                <div class="form-group">
                    <label>Ville</label>
                    <input type="text" class="form-control" v-model="Ville" placeholder="Entrez la ville...">
                </div>

                <div class="form-group">
                    <label>Code Postal</label>
                    <input type="number" class="form-control" v-model="CP" placeholder="Entrez le code postal...">
                </div>

                <h4>Contacte Référent</h4>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Nom contact référent</label>
                    <input type="text" class="form-control" v-model="RefNom" placeholder="Entrez le nom du contact référent..." >
                </div>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Prénom contact référent</label>
                    <input type="text" class="form-control" v-model="RefPrenom" placeholder="Entrez le prénom du contact référent..." >
                </div>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Téléphone contact référent</label>
                    <input type="text" class="form-control" v-model="RefTel" placeholder="Entrez le téléphone du contact référent..." >
                </div>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Adresse Mail</label>
                    <input type="email" class="form-control" v-model="RefMail" placeholder="Entrez l'adresse mail du contact référent..." >
                </div>

                <h4>Secteur D'activité</h4>


                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Secteur</label>
                    <input type="text" class="form-control" v-model="Secteur" placeholder="Entrez le secteur..." id="inputDefault">
                </div>


                <button type="button" class="btn btn-primary" v-on:click="formData(NomEntreprise, Rue, Ville, CP, RefNom, RefPrenom, RefTel, RefMail, Secteur)">Créer</button>
            </form>
        </div>
    </div>

</template>

<script>

    import CustomerService from '../Services/CustomerService.vue'

    export default {
        data () {
            return {
                NomEntreprise: '',
                Rue: '',
                Ville: '',
                CP: '',
                RefNom: '',
                RefPrenom: '',
                RefTel: '',
                RefMail: '',
                Secteur: ''
            }
        },
        methods: {
            formData: function (NomEntreprise, Rue, Ville, CP, RefNom, RefPrenom, RefTel, RefMail, Secteur) {
                CustomerService.createCustomers(NomEntreprise, Rue, Ville, CP, RefNom, RefPrenom, RefTel, RefMail, Secteur)
            }
        }
    }

</script>

<style>
    .Top50 {
        margin-top: 50px;
    }
</style>