<template>
    <div id="getBackground">
        <b-jumbotron class="jumbo" style="margin-top: 5%;">
            <h1 class="hasFont">Contact Me</h1>
            <h1>Email : ref48@uclive.ac.nz</h1>
            <h1>Github : github.com/arye97</h1>
            <h1>Ph : 027-846-4446</h1>
        </b-jumbotron>
        <br/>
    </div>

</template>

<script>

    export default {
        name: "ContactMe",
        computed: {
            state() {
                return this.email.length >= 5 ? true : false
            },
            invalidFeedback() {
                if (this.email.length > 4) {
                    return ''
                } else if (this.email.length > 0) {
                    return 'Enter at least 5 characters'
                } else {
                    return 'Please enter your email'
                }
            },
            validFeedback() {
                return this.state === true ? 'Thank you' : ''
            }
        },
        data() {
            return {
                email: '',
                items: [
                    { email: 'ref48@uclive.ac.nz', phone: "027-846-446"}
                ]
            }
        }
    }
</script>

<style scoped>
    .jumbo {
        background-color: whitesmoke;
        width: 80%;
        margin-left: 10%;
    }

    .hasFont {
        font-family: Vegan;
        font-size: xx-large;
        padding-bottom: 10px;
    }
    #getBackground {
        background: linear-gradient(
            rgba(18, 18, 18, 0.5),
            rgba(0, 0, 0, 0.76)
        ),
        url('../assets/pexels-delcho-dichev-517884.jpg');
        overflow: auto;
    }
</style>