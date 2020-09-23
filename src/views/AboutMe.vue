<template>
    <b-jumbotron class="window">
        <template v-slot:header>
<!--            <b-img-lazy :src="require('../assets/my-photo.jpg')" rounded fluid alt="Can you see my face?"></b-img-lazy>-->
            <b-container>
                <p class="hasNameFont">Ryan Franks</p>
                <p class="hasFont">Aspiring Software Engineer</p>
            </b-container>
            <br/>
        </template>

        <template>
            <div class="mt-3">
                <b-card-group deck class="mb-1 cards" >
                    <b-card border-variant="light" header="Who I am" align="center">
                        <b-card-text>
                            I'm Ryan, I'm an aspiring Software engineer in my fourth year of a BSc in Computer Science at the University
                            of Canterbury. I'm making plans to learn new technologies over the summer and some projects to sink
                            my time into. My goal is to become a full-stack developer in the future. <hr/>Check out my GitHub to see what
                            I've been working on!

                        </b-card-text>
                        <b-button-toolbar id="avatar-list" fixed="top">
                            <div id="github-avatar">
                                <a href="https://github.com/arye97">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                            <div id="mail-avatar">
                                <a href="mailto:ref48@uclive.ac.nz">
                                    <i class="far fa-envelope"></i>
                                </a>
                            </div>
                            <div id="linkedin-avatar">
                                <a href="https://www.linkedin.com/in/ryan-franks-156873194/">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </b-button-toolbar>
                    </b-card>
                    <b-card border-variant="light" header="What I can do" class="text-center">
                        <b-card-text>
                            <b-list-group>
                                <b-list-group-item>Python</b-list-group-item>
                                <b-list-group-item>JavaScript</b-list-group-item>
                                <b-list-group-item>VueJS</b-list-group-item>
                                <b-list-group-item>Java</b-list-group-item>
                                <b-list-group-item>Spring Boot</b-list-group-item>
                                <b-list-group-item>SQL</b-list-group-item>
                                <b-list-group-item>Git</b-list-group-item>
                            </b-list-group>
                        </b-card-text>
                    </b-card>
                </b-card-group>
            </div>
        </template>
        <br/>
    </b-jumbotron>

</template>

<script>
export default {
    name: "AboutMe"
}
</script>

<style scoped>
.jumbotron {
    margin: 0 55px 25px;
    border-radius: 15px;
    min-height: 400px;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

hr {
    padding-left: 30%;
    height: 10px;
    width: 70%;
    border-radius: 5px;
}


#avatar-list {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    list-style-type: none;
}

#avatar-list div{
    margin: 0 15px;
    color: #6d696d;
    font-size: 200%;
    height: 60px;
    width: 60px;

    background: rgba(3, 8, 22, 0.69);
    line-height: 60px;
    border-radius: 30%;
    cursor: pointer;
    transition: 1s;
}

.window {
    margin: 0 7.5% 25px;
    border-radius: 15px;
    min-height: 400px;
    background-color: whitesmoke;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#avatar-list div:hover{
    box-shadow: 0px 0px 10px whitesmoke;
}

.hasNameFont {
    font-family: Vegan;
    padding-bottom: 10px;
}

.hasFont {
    font-family: Vegan;
    font-size: x-large;
}

@media screen and (max-width: 1080px) {
    .window {
        margin: 0 2% 2%;
    }
}

</style>