<template>
  <div id="app">
    <link rel="stylesheet" href="https://unpkg.com/buefy/dist/buefy.min.css">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen">
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'App'
}
</script>

<style>

    @font-face {
        font-family: "Vegan";
        src: local("Vegan"),
        url(./fonts/VeganStylePersonalUse-5Y58.ttf) format("truetype");
    }

    #app {
        /*background:*/
        /*    linear-gradient(*/
        /*        rgba(18, 18, 18, 0.5),*/
        /*        rgba(0, 0, 0, 0.76)*/
        /*    ),*/
        /*    url('./assets/full-screen-image.jpg');*/
        background: #FEFBF3;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

    }

</style>
