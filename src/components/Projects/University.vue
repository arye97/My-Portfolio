<template>
    <div id="app">
        <section>
            <Header/>
            <br/><br/><br/><br/><br/><br/>
        </section>
        <section class="window">
            <div class="window">
                <br/>
                    <div>
                        <b-card-group deck>
                            <b-card class="cards" title="Footsteps" sub-title="Want to plan your next mountain hike, pub crawl or fun run like you're Michael Scott? Use Footsteps!"
                                    :img-src="require('../../assets/footstepslogin.png')" img-alt="Image" img-top>
                                <b-card-text>
                                    <hr/>
                                    A year-long software engineering group project using Agile methods. Programmed in VueJS and
                                    Java with Spring Boot.
                                </b-card-text>
                                <hr/>
                                <<b-col lg="12" class="pb-2"><b-button size="sm" tag="a" href="https://csse-s302g6.canterbury.ac.nz/prod/">Go To Site</b-button></b-col>
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
        <br/>
        </section>
        <br/>
    </div>
</template>

<script>
    import Header from '../Header';
    export default {
        name: "University",
        components: { Header }
    }
</script>

<style scoped>
    .window{
        margin: 0 55px 25px;
        border-radius: 15px;
        min-height: 400px;
        background:
            linear-gradient(
                rgba(18, 18, 18, 0.5),
                rgba(0, 0, 0, 0.76)
            ),
            url('../../assets/full-screen-image.jpg');
        background-size: cover;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #d89351;
    }


    .card-title {
        font-size: xx-large;
        font-weight: bolder;
        padding-bottom: 2%;
    }

    .cards {
        margin-bottom: 5%;
        min-width: 40%;
        font-size: larger;
    }

    @media screen and (max-width: 1080px) {
        .window {
            margin: 0 2% 2%;
        }
        .cards {
            min-width: 50%;
        }
    }
</style>