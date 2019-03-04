<template>
    <div>
        <div class="container caard Top50">

            <div class="card border-info mb-3" style="max-width: 20rem;">
                <div class="card-header">{{NomProjet}}</div>
                <div class="card-body">
                    <h4 class="card-title">{{NomProjet}}</h4>
                    <p class="card-text">{{ProjectDesc}}</p>
                    <p class="card-text">{{DateDebut}}</p>
                    <p class="card-text">{{DateFin}}</p>
                    <p class="card-text">{{MontantTotal}} €</p>
                    <p class="card-text">{{Statut}}</p>
                </div>
                <button type="button" class="btn btn-danger del" v-on:click="DelProject(project._id)">Delete</button>
                <router-link :to="{ name: 'EditProject', params: {id: project._id } }" class="btn btn-primary text-right edit" >Modify</router-link>

            </div>



        </div>
    </div>
</template>


<script>

</script>