<template>
    <div class="head">
        <div class="container card-header text-white bg-dark Bot40">
            <h1>Edit Product</h1>
        </div>

        <div class="container">
            <form>
                <div class="form-group">
                    <label>Nom du projet</label>
                    <input type="text" class="form-control" v-model="NomProjet" placeholder="Entrez le nom du projet...">
                </div>

                <div class="form-group">
                    <label>Description du projet</label>
                    <textarea class="form-control" rows="3" v-model="ProjectDesc" placeholder="Entrez la description du projet..."></textarea>
                </div>

                <div class="form-group">
                    <label class="col-form-label">Date du début</label>
                    <input type="text" class="form-control" v-model="DateDebut" placeholder="Entrez la date du début du projet. (Exemple : 01/01/1970)" >
                </div>

                <div class="form-group">
                    <label class="col-form-label">Date de fin</label>
                    <input type="text" class="form-control" v-model="DateFin" placeholder="Entrez la date de fin du projet. (Exemple : 01/01/1970)" >
                </div>


                <div class="form-group">
                    <label class="control-label">Montant total du projet</label>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">€</span>
                            </div>
                            <input type="text" class="form-control" v-model="MontantTotal" placeholder="Entrez le montant du projet..." aria-label="Amount (to the nearest dollar)">
                            <div class="input-group-append">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Statut</label>
                    <select class="custom-select" v-model="Statut">
                        <option value="Annulé">Annulé</option>
                        <option value="Terminé">Terminé</option>
                        <option value="En cours">En cours</option>
                        <option value="Prospect">Prospect</option>
                    </select>
                </div>


                <button type="button" class="btn btn-primary" v-on:click="formData( NomProjet, ProjectDesc, DateDebut, DateFin, MontantTotal, Statut)">Modifier</button>
            </form>
        </div>
    </div>

</template>

<script>

    import ProjectsService from '../Services/ProjectService.vue'

    export default {


        data () {
            return {
                NomProjet: '',
                ProjectDesc: '',
                DateDebut: '',
                DateFin: '',
                MontantTotal: '',
                Statut: '',

            }
        },
        created () {
            let paramsId = this.$route.params.id;
            ProjectsService.getProject(paramsId)
                .then((data) => {
                    this.NomProjet = data.NomProjet;
                    this.ProjectDesc = data.ProjectDesc;
                    this.DateDebut = data.DateDebut;
                    this.DateFin = data.DateFin;
                    this.MontantTotal = data.MontantTotal;
                    this.Statut = data.Statut;

                })
        },
        methods: {
            formData: function ( NomProjet, ProjectDesc, DateDebut, DateFin, MontantTotal, Statut, paramsId) {
                // console.log('REQ: '+ NomProjet+' ' +ProjectDesc+' ' + DateDebut+ ' ' +DateFin+ ' ' +MontantTotal+ ' ' +Statut)
                ProjectsService.UpdateProject(paramsId, NomProjet, ProjectDesc, DateDebut, DateFin, MontantTotal, Statut)
            }
        }
    }

</script>
