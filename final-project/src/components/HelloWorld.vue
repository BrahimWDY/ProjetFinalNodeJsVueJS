<template>
  <div class="hello Top50">
    <div class="jumbotron">
      <h1 class="display-3">Hello, World!</h1>
      <p class="lead">Voici mon Projet réalisé VueJS/NodeJS. </p>
      <hr class="my-4">
      <p>Le but de ce projet était de créer application de gestion de projet qui permet de créer des projets, des salariés et des clients.</p>

      <div class="container caard">

        <router-link to="/projects">
          <div class="card text-white bg-warning mb-3" style="max-width: 20rem;">
            <div class="card-header">Projets</div>
            <div class="card-body">
              <h4 class="card-title">Nombre de projets</h4>
              <p class="card-text">Il y a {{projetCount}} projet(s).</p>
            </div>
          </div>
        </router-link>

        <router-link to="/customers">
          <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
            <div class="card-header">Clients</div>
            <div class="card-body">
              <h4 class="card-title">Nombre de clients</h4>
              <p class="card-text">Il y a {{clientCount}} client(s).</p>
            </div>
          </div>
        </router-link>

        <router-link to="/employees">
          <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
            <div class="card-header">Salariés</div>
            <div class="card-body">
              <h4 class="card-title">Nombre de salariés</h4>
              <p class="card-text">Il y a {{salarieCount}} Salarié(s).</p>
            </div>
          </div>
        </router-link>

      </div>


    </div>
  </div>
</template>

<script>

    import ProjectsService from '../Services/ProjectService.vue'
    import CustomerService from '../Services/CustomerService.vue'
    import EmployeeService from '../Services/EmployeeService.vue'

export default {


  name: 'HelloWorld',

    data(){
        return{
            projetCount: 0,
            clientCount: 0,
            salarieCount: 0
        }
    },

    created () {
      let self = this
        ProjectsService.getProjectCount()
            .then((count) => {
                self.projetCount = count.length
            })
            .catch(error => {
                console.log(error)
            }),

      CustomerService.getClientCount()
          .then((count) => {
              self.clientCount = count.length
          })
          .catch(error => {
              console.log(error)
          }),

        EmployeeService.getEmployeeCount()
          .then((count) => {
              self.salarieCount = count.length
          })
          .catch(error => {
              console.log(error)
          })


    },


}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.caard .card {
  display: inline-block;
  margin: 30px 20px;
  width: 50%;
  height: auto;
}


.Top50{
  margin-top: 50px;
}
</style>

