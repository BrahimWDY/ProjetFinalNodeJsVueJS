<template lang="html">
    <footer class="text-center">
        <span>Copyright {{date}} <strong>Brahim Ouarradi</strong> © </span>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                date:new Date().getFullYear()
            }
        }
    }
</script>

<style lang="css" scoped>
    footer {
        position: relative;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-color: #42b983;
        color: white;
        text-align: center;
        padding: 15px;
    }

    .text-center {
        margin-top: 7.5% !important;
    }

</style>
