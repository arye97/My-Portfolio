<template>
    <div id="home">
        <br/>
        <br/>
        <AboutMe/>
        <br/>
        <br/>
        <Projects/>
        <ContactMe/>
    </div>
</template>

<script>
    import AboutMe from "../views/AboutMe";
    import Projects from "../components/Projects/Projects";
    import ContactMe from "../components/ContactMe";
    export default {
        name: "Home",
        components: {ContactMe, AboutMe, Projects }
    }
</script>

<style >

    h1 {
        font-family: 'Montserrat', sans-serif;
    }
    html {
        scroll-behavior: smooth;

    }
    body {
        height: 100%;
        margin: 0;
    }

    buttons {
        padding-left: 60%;
        margin: 10px 10px 10px;
        max-width: 50%;
        width: 10%;

    }

</style>
