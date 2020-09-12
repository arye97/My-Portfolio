<template class="header">
    <b-navbar fixed-top >
        <template slot="brand">
            <b-navbar-item>
                <h1>Ryan Franks</h1>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <router-link :to="{ name: 'Home' }"
                             class="nav-link">About Me</router-link>
            </b-navbar-item>
            <b-navbar-dropdown label="My Projects">
<!--                <b-navbar-item>-->
<!--                    <router-link :to="{ name: 'Personal' }"-->
<!--                                 class="nav-link">Personal</router-link>-->
<!--                </b-navbar-item>-->
                <b-navbar-item>
                    <router-link :to="{ name: 'University' }"
                                 class="nav-link">University</router-link>
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button tag="a"
                              href="https://drive.google.com/file/d/1u_Rm0TnquIawEn3ZuaihG-bLmnP_Rhn3/view?usp=sharing" download
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