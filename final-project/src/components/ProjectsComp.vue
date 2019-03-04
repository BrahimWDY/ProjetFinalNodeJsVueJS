<template>
    <div id="project">
        <div class="title">
            <h1 class="display-4">Projects</h1>
            <router-link to="/AddProject" class="btn btn-success text-right">Ajouter un projet +</router-link>

        </div>


        <div class="container caard Top50">

            <div class="card border-warning mb-3" style="max-width: 20rem;" v-for="project in projects">
                <h3 class="card-header">{{project.NomProjet}}</h3>
                <div class="card-body">
                    <p class="card-text"><strong>Description 💬 : </strong>{{project.ProjectDesc}}</p>
                    <hr>
                    <p class="card-text"><strong>Début ⏳ : </strong>{{project.DateDebut}}</p>
                    <p class="card-text"><strong>Fin ⌛️ : </strong>{{project.DateFin}}</p>
                    <hr>
                    <p class="card-text"><strong>Montant 💶 : </strong>{{project.MontantTotal}} €</p>
                    <p class="card-text"><strong>Statut : </strong>{{project.Statut}}</p>
                </div>
                <button type="button" class="btn btn-danger del" v-on:click="DelProject(project._id)">Delete</button>
                <router-link :to="{ name: 'EditProject', params: {id: project._id } }" class="btn btn-primary text-right edit" >Edit</router-link>

            </div>



        </div>

    </div>
</template>

<script>

    import ProjectsService from '../Services/ProjectService'

    export default {
        data () {
            return {
                projects: ''
            }
        },
        created () {
            ProjectsService.getProjects()
                .then((data) => {
                    this.projects = data
                })
                .catch(error => { console.log(error) })
        },
        methods:{
            DelProject: function (id) {
                ProjectsService.deleteProduct(id);
                this.$router.push('/projects');
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

    .caard .card {
        display: inline-block;
        margin: 30px 20px;
        width: 25%;
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