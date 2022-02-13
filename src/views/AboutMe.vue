<template >
    <div id="app">
        <b-jumbotron class="window bg-transparent">
            <template v-slot:header>
                <b-container>
                  <p class="hasNameFont">Hi, I'm Ryan</p>
                  <p class="hasSmallerNameFont">A Software Engineer from NZ</p>
                </b-container>
            </template>
            <template v-slot:lead>
                <div class="">
                    <hr/>
<!--                    Check out my GitHub to see what I've been working on!-->
                    <b-button-toolbar class="align-items-center " id="avatar-list" fixed="top">
                        <div id="github-avatar">
                            <a target="_blank" href="https://github.com/arye97">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                        <div id="mail-avatar">
                            <a href="mailto:ryan.ethan.franks@gmail.com">
                                <i class="far fa-envelope"></i>
                            </a>
                        </div>
                        <div id="linkedin-avatar">
                            <a target="_blank" href="https://www.linkedin.com/in/ryan-franks-156873194/">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
<!--                        <div>-->
<!--                            <a href="https://drive.google.com/file/d/1djBKXoBNdrEuTy-NIzV8BScg2iukZ-pE/view?usp=sharing" download>CV</a>-->
<!--                        </div>-->
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

.jumbotron {
    margin: 0 55px 25px;
    border-radius: 15px;
    min-height: 400px;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

i {
  color: #194350;
}

hr {
    margin-top: 10%;
    margin-bottom: 5%;
    padding-left: 30%;
    height: 10px;
    width: 70%;
    border-radius: 5px;
    color: #CDB699;
    background-color: #CDB699;
}


#avatar-list {
    color: #e84f70;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    list-style-type: none;
}

#avatar-list div{

    margin: 0 7px;
    solid-color: #e84f70;
    color: #e84f70;
    font-size: 200%;
    height: 60px;
    width: 60px;

    /*background: rgba(3, 8, 22, 0.69);*/
    line-height: 60px;
    border-radius: 30%;
    cursor: pointer;
    transition: 1s;
}

.window {
    margin: 0 7.5% 10%;
    border-radius: 15px;
    min-height: 400px;
    /*background-color: whitesmoke;*/
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#avatar-list div:hover{
    box-shadow: 0px 0px 10px #e84f70;
}

.hasNameFont {
    color: #e84f70;
    font-family: Vegan;
    padding-top: 10%;
    padding-bottom: 10px;
}

.hasSmallerNameFont {
  color: #e84f70;
  font-family: Vegan;
  font-size: xx-large;
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
      margin: 0 2% 10%;
    }
}

@media screen and (max-width: 800px) {
  .window {
    margin: 30% 2% 50%;
  }
}

p {
  margin-bottom: 2.5%;
}

</style>