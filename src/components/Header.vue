<template class="header">
    <b-navbar fixed-top >
        <template slot="brand">
            <b-navbar-item>
                <h1>Ryan Franks</h1>
            </b-navbar-item>
        </template>
        <template slot="start">
<!--            <b-navbar-item>-->
<!--                <router-link :to="{ name: 'Home' }"-->
<!--                             class="nav-link">About Me</router-link>-->
<!--            </b-navbar-item>-->
            <b-navbar-item>
              <router-link :to="{ name: 'Projects' }"
                           class="nav-link">My Projects</router-link>
            </b-navbar-item>

        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button tag="a"
                              href="https://drive.google.com/file/d/1XKn8ZHL8s8Xfr7A0WNdEH3I4YZYx9SAx/view?usp=sharing" download
                              type="is-danger" outlined>
                        My CV
                    </b-button>
                    <b-button tag="a"
                              href="https://github.com/arye97"
                              type="is-danger" outlined>
                        My Github
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
        <br/><br/><br/>
        <br/><br/><br/>
    </b-navbar>

</template>

<script>
    export default {
        name: "Header",
        methods: {
            goToPage(path) {
                this.$router.push(path);
            }
        }
    }
</script>

<style scoped>

</style>