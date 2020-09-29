<template>
    <div id="app">
        <section>
            <div class="window">
                    <div>
                        <br/>
                        <b-jumbotron class="bg-transparent">
                        <h1 class="titleText">What I've been working on</h1>
                        </b-jumbotron>
                        <b-card-group deck>
                            <b-card class="cards" title="Footsteps" sub-title="Want to plan your next mountain hike, pub crawl or fun run like you're Michael Scott? Use Footsteps!"
                                    :img-src="require('../../assets/footstepslogin.png')" img-alt="Image" img-top>
                                <b-card-text>
                                    <hr/>
                                    A year-long software engineering group project using Agile methods. Programmed in VueJS and
                                    Java with Spring Boot.
                                </b-card-text>
                                <hr/>
                                <b-col lg="12" class="pb-2"><b-button size="sm" tag="a" href="https://csse-s302g6.canterbury.ac.nz/prod/">Go To Site</b-button></b-col>
                                <template v-slot:footer>
                                    <small class="text-muted">Feb 2020 - Oct 2020</small>
                                </template>
                            </b-card>
                            <b-card class="cards" title="Petitions (Client)" sub-title="Sign for your future with Petitions" :img-src="require('../../assets/petitionslayout.png')" img-alt="Image" img-top>
                                <b-card-text>
                                    <hr/>
                                    A client for a Petitions website written in VueJS using the Buefy component library.
                                    Using a RESTful API written in NodeJS.
                                </b-card-text>
                                <hr/>
                                <b-col lg="12" class="pb-2"><b-button size="sm" tag="a" href="https://github.com/arye97/seng365-assignment2-client/tree/master/assignment2-client">Project Github</b-button></b-col>
                                <template v-slot:footer>
                                    <small class="text-muted">May 2020</small>
                                </template>
                            </b-card>
                        </b-card-group>
                    </div>
            </div>
            <div class="window comingSoon">
                <div>
                    <b-jumbotron class="bg-transparent" style="margin-top: -5%;">
                        <h1 >Coming Soon</h1>
                        <br/>
                        <h2 class="textSpecial">
                            This summer I'm going to be learning as much as I can. Starting with React and moving onto more fullstack
                            development, using NodeJS and hosting these projects on AWS.
                            As I'm still at University, I'm planning out what the projects are that I can work on to learn these technologies
                            as best I can.
                        </h2>
                    </b-jumbotron>
                    <div class="coming-soon-window">
                        <b-card class="cards" title="Where can I talk?" sub-title="Tell us what languages you speak or want to learn, and we'll tell you where you can speak on the map!"
                                :img-src="require('../../assets/languages.png')" img-alt="Image" img-top>
                            <b-card-text>
                                <hr/>
                                For this project I want to develop the front-end in <strong>React JS using the Shards-React and DataMaps libraries.</strong>
                                To collect data I will use the <strong>RESTCountries and MediaWiki API's.</strong>
                                My vision is that you will be able to select as many languages that you want/do speak, and a map appears highlighting
                                each country where those languages are spoken which when hovered over will give more information about that country.
                            </b-card-text>
                            <template v-slot:footer>
                                <small class="text-muted">TBD</small>
                            </template>
                        </b-card>
                    </div>
                </div>
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

    #app {
        background:
            linear-gradient(
                rgba(18, 18, 18, 0.5),
                rgba(0, 0, 0, 0.76)
            ),
            url('../../assets/pexels-innermost-limits-3894157.jpg');
    }


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
        .coming-soon-window {
            padding-left: 0%;
        }
    }


</style>