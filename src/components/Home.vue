<template>
    <div id="home">
        <Header/>
        <br/><br/><br/>
        <AboutMe/>
        <br/>
    </div>
</template>

<script>
    import Header from './Header';
    import AboutMe from "../views/AboutMe";
    export default {
        name: "Home",
        components: { Header, AboutMe }
    }
</script>

<style >
    .notification {
        margin-left: 25%;
        width: 50%;
        margin-right: -50%;
    }
    h1 {
        font-family: 'Montserrat', sans-serif;
    }
    html {
        scroll-behavior: smooth;

    }
    body {
        background: linear-gradient(0deg, rgb(5, 15, 19) 0%, rgba(11,35,45,1) 80%);
        height: 100%;
        margin: 0;
        background: rgb(7, 21, 27) no-repeat fixed;
    }
</style>
