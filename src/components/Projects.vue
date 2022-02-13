<template>
    <div id="app">
        <section>
            <div class="window">
                <b-jumbotron class="bg-transparent">
                <h1 class="titleText" style="color: #e84f70">My Projects</h1>
                </b-jumbotron>
                <hr class="special-hr"/>
                <b-card-group deck>
                    <b-card class="cards" title="Footsteps" sub-title="Want to plan your next mountain hike, pub crawl or fun run like you're Michael Scott? Use Footsteps!"
                            :img-src="require('../assets/footstepslogin.png')" img-alt="Image" img-top>
                        <b-card-text>
                            <hr/>
                            A year-long software engineering group project using Agile processes. Built using VueJS and Java with Spring Boot.
                            I worked alongside 8 others over the course of 8 months while learning new technologies and methodologies.
                        </b-card-text>
                        <hr/>
                        <b-col lg="12" class="pb-2"><b-button size="sm" tag="a" href="https://github.com/arye97/Footsteps/">Github Project</b-button></b-col>
                        <template v-slot:footer>
                            <small class="text-muted">Feb 2020 - Oct 2020</small>
                        </template>
                    </b-card>
                    <b-card class="cards" title="Petitions" sub-title="Sign for your future with Petitions" :img-src="require('../assets/petitionslayout.png')" img-alt="Image" img-top>
                        <b-card-text>
                            <hr/>
                            A Petitions website written in VueJS using the Buefy component library.
                            Using a RESTful API written in Node with Express.
                        </b-card-text>
                        <hr/>
                        <b-col lg="12" class="pb-2"><b-button size="sm" tag="a" href="https://github.com/arye97/seng365-assignment2-client/">Github Project</b-button></b-col>
                        <template v-slot:footer>
                            <small class="text-muted">May 2020</small>
                        </template>
                    </b-card>
                    <b-card class="cards last-card" title="Spoken" sub-title="Find out where speaks the languages you do"
                            :img-src="require('../assets/img.png')" img-alt="Image" img-top >
                      <b-card-text>
                        <hr/>
                        This project was created mostly due to my love of geography, languages and cartography. I wanted to create something
                        that would use a map and display spoken languages. Most countries have multiple languages listed as official languages
                        and I was interested in how easy it would be to see overlapping languages.
                      </b-card-text>
                      <hr/>
                      <b-col lg="12" class="pb-2"><b-button size="sm" tag="a" href="https://github.com/arye97/Spoken/">Github Project</b-button></b-col>
                      <template v-slot:footer>
                        <small class="text-muted">March 2021</small>
                      </template>
                    </b-card>
<!--                            <b-card style="visibility:hidden"></b-card>-->
                </b-card-group>
            </div>
        <br/>
        </section>
        <br/>
    </div>
</template>

<script>
    export default {
        name: "Projects"
    }
</script>

<style scoped>

    .window{

        margin: 0 2% 2%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

    }

    .textSpecial {
        color: white;
        font-size: large;
        text-align: center;
        max-width: 75%;
        padding-left: 25%;
    }

    h1 {
        /*color: #e84f70;*/
        color: white;
        font-family: Vegan;
        font-size: xxx-large;
    }

    .card-title {
        font-size: xx-large;
        font-weight: bolder;
        padding-bottom: 2%;
    }

    .cards {
        width: 75%;
        margin-bottom: 5%;
        min-width: 40%;
        font-size: larger;
    }

    .last-card {
      align-content: center;
      width: 75%;
      margin-left: 22%;
      margin-right: 22%;
      margin-bottom: 5%;
      min-width: 40%;
      font-size: larger;
    }

    .coming-soon-window {
        padding-left: 21%;
    }

    @media screen and (max-width: 1080px) {
        .window {
            margin: 0 2% 2%;
        }
        /*.coming-soon-window {*/
        /*    padding-left: 0%;*/
        /*}*/
    }

    @media screen and (max-width: 800px) {
        .cards {
            width: 100%;
            min-width: 50%;
        }
        .last-card {
          width: 100%;
          min-width: 50%;
          margin: 0;
        }
    }

    .special-hr {
      margin-right: 8%;
      margin-left: 8%;
      height: 10px;
      margin-top: -5%;
      margin-bottom: 2%;
      border-radius: 5px;
      color: #CDB699;
      background-color: #CDB699;
    }


</style>