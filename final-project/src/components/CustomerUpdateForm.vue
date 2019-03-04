<template>
    <div class="head">
        <div class="container card-header text-white bg-dark Bot40">
            <h1>Edit customer</h1>
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
                    <input type="text" class="form-control" v-model="Adresse.Rue" placeholder="Entrez le numéro et la rue...">
                </div>

                <div class="form-group">
                    <label>Ville</label>
                    <input type="text" class="form-control" v-model="Adresse.Ville" placeholder="Entrez la ville...">
                </div>

                <div class="form-group">
                    <label>Code Postal</label>
                    <input type="number" class="form-control" v-model="Adresse.CP" placeholder="Entrez le code postal...">
                </div>

                <h4>Contact Référent</h4>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Nom contact référent</label>
                    <input type="text" class="form-control" v-model="ContactRef.nom" placeholder="Entrez le nom du contact référent..." >
                </div>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Prénom contact référent</label>
                    <input type="text" class="form-control" v-model="ContactRef.prenom" placeholder="Entrez le prénom du contact référent..." >
                </div>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Téléphone contact référent</label>
                    <input type="text" class="form-control" v-model="ContactRef.Telephone" placeholder="Entrez le téléphone du contact référent..." >
                </div>

                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Adresse Mail</label>
                    <input type="email" class="form-control" v-model="ContactRef.mail" placeholder="Entrez l'adresse mail du contact référent..." >
                </div>

                <h4>Secteur D'activité</h4>


                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Secteur</label>
                    <input type="text" class="form-control" v-model="Secteur" placeholder="Entrez le secteur..." id="inputDefault">
                </div>


                <button type="button" class="btn btn-primary" v-on:click="formData(NomEntreprise, Adresse.Rue, Adresse.Ville, Adresse.CP, ContactRef.nom, ContactRef.prenom, ContactRef.Telephone, ContactRef.mail, Secteur)">Modifier</button>
            </form>
        </div>
    </div>

</template>

<script>

    import CustomersService from '../Services/CustomerService.vue'

    export default {


        data () {
            return {
                NomEntreprise: '',
                Adresse: '',
                ContactRef: '',
                Secteur: ''

            }
        },
        created () {
            let paramsId = this.$route.params.id;
            CustomersService.getCustomer(paramsId)
                .then((data) => {
                    this.NomEntreprise = data.NomEntreprise;
                    this.Adresse = data.Adresse;
                    this.ContactRef = data.ContactRef;
                    this.Secteur = data.Secteur;

                })
        },
        methods: {
            formData: function (NomEntreprise, Adresse, ContactRef, Secteur) {
                CustomersService.UpdateCustomers(this.$route.params.id, NomEntreprise, Adresse, ContactRef, Secteur)
            }
        }
    }
</script>