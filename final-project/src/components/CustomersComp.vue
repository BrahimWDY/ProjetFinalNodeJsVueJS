<template>
    <div id="project">
        <div class="title">
            <h1 class="display-4">Customers</h1>
            <router-link to="/AddCustomer" class="btn btn-success text-right">Ajouter un client +</router-link>

        </div>


        <div class="container caard Top50">

            <div class="card border-info mb-3" style="max-width: 20rem;" v-for="customer in customers">
                <div class="card-header">🏢 : {{customer.NomEntreprise}}</div>

                <div class="card-body">
                    <h4>Adresse 🏠</h4>
                    <hr>
                    <p class="card-text">{{customer.Adresse.Rue}} <br>
                        {{customer.Adresse.Ville}} <br>
                        {{customer.Adresse.CP}}
                    </p>

                    <hr>

                    <h4>Contact Référent 🤝</h4>
                    <hr>
                    <div v-if="customer.ContactRef">
                        <p class="card-text">{{customer.ContactRef.nom + ' ' + customer.ContactRef.prenom}} <br>
                            {{customer.ContactRef.Telephone}} <br>
                            {{customer.ContactRef.mail}}
                        </p>
                    </div>

                    <hr>

                    <h4>Secteur 💼</h4>
                    <hr>
                    <p class="card-text">{{customer.Secteur}}</p>
                </div>
                <button type="button" class="btn btn-danger del" v-on:click="DelCustomer(customer._id)">Delete</button>
                <router-link :to="{ name: 'EditCustomer', params: {id: customer._id } }" class="btn btn-primary text-right edit" >Edit</router-link>

            </div>



        </div>

    </div>
</template>

<script>

    import CustomerService from '../Services/CustomerService'

    export default {
        data () {
            return {
                customers: ''
            }
        },
        created () {
            CustomerService.getCustomers()
                .then((data) => {

                    this.customers = data;
                    console.log(this.customers)
                })
                .catch(error => { console.log(error) })
        },
        methods:{
            DelCustomer: function (id) {
                CustomerService.deleteCustomers(id);
                this.$router.push( {name: 'Customers' });

            }


        }

    }
</script>

<style scoped>
    .title {
        background-color: #303030;
        width: 100%;
        height: 100px;
    }

    .card {
        display: inline-block;
        margin: 30px 20px;
        width: 100%;
        height: auto;
    }



    .Top50{
        margin-top: 50px;
    }

    #project{
        height: 100%;
    }

    .del {
        margin: 10px 10px;
    }

    .edit {
        margin: 10px 10px;
    }


</style>