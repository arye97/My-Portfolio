<template >
    <div id="aboutMeBackground">
        <b-jumbotron class="window bg-transparent">
            <template v-slot:header>
                <b-container>
                    <p class="hasNameFont">Ryan Franks</p>
                    <p class="hasFont">Aspiring Software Engineer</p>
                </b-container>
                <br/>
            </template>
            <template v-slot:lead>
                <b-row>
                    <b-col lg>
                        <h3 class="myText">I'm Ryan, I'm an aspiring Software engineer in my fourth year of a BSc in Computer Science at the University
                            of Canterbury. I'm making plans to learn new technologies over the summer and some projects to sink
                            my time into. My goal is to become a full-stack developer in the future, and to use this site as a place to push forward my knowledge
                            and experience.
                        </h3>
                    </b-col>
                    <b-col lg>
                        <h3 class="myText">
                            I have a keen interest in full stack development, and this summer I want to get my hands dirty with a full
                            MERN stack application. I'm also interested in Artificial Intelligence, and want to make a genetic model using
                            Tensorflow.
                            <br/> <br/>
                            I've had experience using JavaScript and frameworks like VueJS and Node. Along with developing an
                            API in Java using the Spring Boot framework. I've programmed in Python and want to expand my knowledge in it.
                        </h3>
                    </b-col>
                </b-row>
                <div class="myText">
                    <hr/>
                    Check out my GitHub to see what
                    I've been working on!

                    <b-button-toolbar class="align-items-center" id="avatar-list" fixed="top">
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
                        <div>
                            <a href="https://drive.google.com/file/d/1djBKXoBNdrEuTy-NIzV8BScg2iukZ-pE/view?usp=sharing" download>CV</a>
                        </div>
                    </b-button-toolbar>
                </div>
            </template>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    name: "AboutMe"
}
</script>

<style scoped>

#aboutMeBackground {
    background: linear-gradient(
        rgba(18, 18, 18, 0.5),
        rgba(0, 0, 0, 0.76)
    ),
    url('../assets/pexels-delcho-dichev-517884.jpg');
    overflow: auto;
}

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
    margin: 0 7px;
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
    /*background-color: whitesmoke;*/
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#avatar-list div:hover{
    box-shadow: 0px 0px 10px whitesmoke;
}

.hasNameFont {
    color: #e84f70;
    font-family: Vegan;
    padding-bottom: 10px;
}

.myText {
    color : whitesmoke;
}

.hasFont {
    color: #e84f70;
    font-family: Vegan;
    font-size: x-large;
}

@media screen and (max-width: 1080px) {
    .window {
        margin: 0 2% 2%;
    }
}

</style>