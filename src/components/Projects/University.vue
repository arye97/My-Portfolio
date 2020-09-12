<template>
    <div id="app">
        <section>
            <Header/>
            <br/><br/><br/><br/><br/><br/>
        </section>
        <section class="window">
            <div class="container window">
                <br/>
                <br/>
                <b-jumbotron>
                    <div>
                        <b-card-group deck>
                            <b-card class="cards" title="Footsteps" :img-src="require('../../assets/footstepslogin.png')" img-alt="Image" img-top>
                                <b-card-text>
                                    Want to plan your next mountain hike, pub crawl or fun run like you're Michael Scott? Use Footsteps!
                                    <hr/>
                                    A year-long software engineering group project using Agile methods. Programmed in VueJS and
                                    Java with Spring Boot.
                                </b-card-text>
                                <hr/>
                                <b-col lg="12" class="pb-2"><b-button size="sm">
                                    <router-link :to="{ name: 'Footsteps' }"
                                                 class="nav-link">See Details</router-link>
                                </b-button></b-col>
                                <template v-slot:footer>
                                    <small class="text-muted">Feb 2020 - Oct 2020</small>
                                </template>
                            </b-card>

                            <b-card class="cards" title="Petitions (Client)" :img-src="require('../../assets/petitionslayout.png')" img-alt="Image" img-top>
                                <b-card-text>
                                    Sign for your future with <strong>Petitions</strong>
                                    <hr/>
                                    A client for a Petitions website written in VueJS using the Buefy component library.
                                    Using a RESTful API written in NodeJS.
                                </b-card-text>
                                <hr/>
                                <b-col lg="12" class="pb-2"><b-button size="sm" tag="a" href="https://github.com/arye97/seng365-assignment2-client/tree/master/assignment2-client">See Details</b-button></b-col>
                                <template v-slot:footer>
                                    <small class="text-muted">May 2020</small>
                                </template>
                            </b-card>
                        </b-card-group>
                    </div>
                </b-jumbotron>
            </div>
        <br/>
        </section>
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

    .cards {
        font-size: larger;
        font-weight: bold;
    }
</style>