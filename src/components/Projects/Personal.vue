<template>
    <div id="app">
        <section>
            <Header/>
            <br/><br/><br/><br/><br/><br/>
        </section>
        <section>
            <div class="container">
                <div class="notification">
                    These are my Personal Projects
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from '../Header';
    export default {
        name: "Personal",
        components: { Header }
    }
</script>

<style scoped>

</style>