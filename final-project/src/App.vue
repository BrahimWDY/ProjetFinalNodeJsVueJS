<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

    import Footer from '@/layout/Footer.vue'
    import Header from '@/layout/Header.vue'

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #ffffff;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .Top50 {
    margin-top: 50px;
  }
</style>

