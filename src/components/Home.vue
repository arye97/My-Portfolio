<template>
    <div>
        <div id="aboutMe">
            <AboutMe/>
        </div>
        <div id="work">
          <Work/>
        </div>
        <div id="projects">
            <Projects/>
        </div>
        <ContactMe/>
    </div>
</template>

<script>
    import AboutMe from "../views/AboutMe";
    import Projects from "./Projects";
    import Work from "@/components/Work";
    export default {
        name: "Home",
        components: {Work, AboutMe, Projects}
    }
</script>

<style >

    /*#aboutMe {*/
    /*    background: linear-gradient(*/
    /*        rgba(18, 18, 18, 0.5),*/
    /*        rgba(0, 0, 0, 0.76)*/
    /*    ),*/
    /*    url('../assets/pexels-delcho-dichev-517884.jpg');*/
    /*}*/

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
