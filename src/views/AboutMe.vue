<template>
    <b-jumbotron>
        <template v-slot:header>
            <h1 id="intro-header">Hi! I'm Ryan</h1>
        </template>
        <p id="description">
            I'm studying towards a BSc in Computer Science at University of Canterbury, due to graduate at the end of 2020.
            Over the last year I've been able to work on a few full-stack projects, and I've realised full-stack is the career
            path I want to pursue.
            <br/><br/>
            This portfolio exists to show the work I've done with web technologies like VueJS and Java Spring.
            <br/>
            <br/>
            Ryan Franks
        </p>
        <br/>
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
    color: #db6b84;
}

#intro-header {
    margin-bottom: 0.5%;
    font-size: 100%;
}

#description {
    margin-left: 25%;
    margin-right: 25%;
    font-size: 120%;
}

hr {
    padding-left: 30%;
    height: 10px;
    width: 70%;
    background-color: #db6b84;
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