<template>
    <div>
        <div class="title">
            <h1 class="display-4">Employees</h1>
            <router-link to="/AddEmployee" class="btn btn-success text-right">Ajouter un salarié +</router-link>
        </div>

        <div class="container Top50">
            <div class="card border-danger mb-3" v-for="employee in employees">
                <div class="card-body" >
                    <h4 class="card-title">{{employee.Nom + ' ' + employee.Prenom}}</h4>
                    <hr>
                    <h6 class="card-subtitle mb-2 "> Username : {{employee.Username}}</h6>
                    <h6 class="card-subtitle mb-2 text-muted"> 🎂 : {{employee.Birthday}}</h6>
                    <hr>
                    Adresse 🏠 :
                    <p class="card-text">{{employee.Adresse.Rue}} <br>
                        {{employee.Adresse.Ville}} <br>
                        {{employee.Adresse.CP}}
                    </p>
                    <hr>
                    <h5 class="card-subtitle mb-2 "> 📞 : {{employee.Telephone}}</h5>
                    <h5 class="card-subtitle mb-2 "> 💻 : {{employee.Mail}}</h5>
                    <hr>

                    <p class="card-text">👨🏻‍💻 : {{employee.Poste}}</p>
                    <button type="button" class="btn btn-danger del" v-on:click="DelEmployee(employee._id)">Delete</button>
                    <router-link :to="{ name: 'EditEmployee', params: {id: employee._id } }" class="btn btn-primary text-right edit" >Edit</router-link>

                </div>
            </div>
        </div>


    </div>
</template>


<script>

    import EmployeeService from '../Services/EmployeeService'

    export default {
        data () {
            return {
                employees: ''
            }
        },
        created () {
            EmployeeService.getEmployees()
                .then((data) => {
                    this.employees = data
                })
                .catch(error => { console.log(error) })
        },
        methods:{
            DelEmployee: function (id) {
                EmployeeService.deleteEmployees(id);
                this.$router.push('/employees');
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

    .card{
        width: 28%;
        height: auto;
        display: inline-block;
        margin: 30px 20px;
    }

    .del{
        margin: 0 20px;
    }
</style>