<template>


    <b-jumbotron>
        <template v-slot:header>
            <h1 id="intro-header">Hi! I'm Ryan Franks</h1>
        </template>
        <hr class="my-4">
        <p id="description">
            I'm studying towards a BSc in Computer Science at University of Canterbury, due to graduate at the end of 2020.-->
            Through my degree I've found out how fun and fulfilling full-stack development is, and want to pursue this in my career.
            This portfolio shows off the full-stack work I've done while at university(, and anything else I've hopefully done on the side).
        </p>
        <br/><br/><br/><br/><br/><br/>
        <ul id="avatar-list">
            <li id="github-avatar">
                <a href="https://github.com/arye97">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li id="mail-avatar">
                <a href="mailto:ref48@uclive.ac.nz">
                    <i class="far fa-envelope"></i>
                </a>
            </li>
            <li id="linkedin-avatar">
                <a href="https://www.linkedin.com/in/ryan-franks-156873194/">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </li>
        </ul>


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
    background:
        linear-gradient(
            rgba(18, 18, 18, 0.5),
            rgba(0, 0, 0, 0.76)
        ),
        url('../assets/full-screen-image.jpg');
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #d89351;
}

#intro-header {
    margin-bottom: 0.5%;
    font-size: 100%;
}

#description {
    margin-left: 25%;
    margin-right: 25%;
    font-size: 120%;
    /*font-family: FuturaLT-Heavy, Helvetica, Arial, sans-serif;*/
}

hr {
    padding-left: 30%;
    height: 10px;
    width: 70%;
    background-color: #0b232d;
    border-radius: 5px;
}

#avatar-list {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    padding: 0;
    list-style-type: none;
}

#avatar-list li{
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

#avatar-list li:hover{
    box-shadow: 0 0 18px whitesmoke;
}
</style>