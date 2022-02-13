<template>
  <div id="app">
    <h1 class="titleText">My Work</h1>
    <hr class="special-hr"/>
    <b-container fluid class="p-4">
      <b-row>
        <b-col class="workDetailsContainer">
          <div>
            <b-jumbotron style="background-color: #F3F4ED">
              <b-row>
                <b-col>
                  <h1 class="noels">Noel Leeming</h1>
                </b-col>
                <b-col>
                  <b-img thumbnail fluid src="../assets/nl.png" height="100px" width="100px" rounded alt="Noel Leeming"></b-img>
                </b-col>
              </b-row>
              <hr/>
              <p>
                Since finishing University I have been working at The Warehouse Group, specifically Noel Leeming. Here I have
                been able to improve my back end skills in Java and learning architectural practices for maintaining
                legacy code and for making my code easy to maintain in the future. I have also had the opportunity
                to learn a whole new language and way of working in learning RPG for the 'IBM Series i' server.<br/><br/>
                Here I have been a part of three major projects, the first being working on an in-house web application
                for our store-people to use in place of the POS till systems, this was built using Java using Spring server
                side rendered pages. The second and third projects were involved in merging Noel Leeming websites and systems
                to be closer to the Warehouse's systems. These projects have both used Java with Apache Kafka and Apache Camel
                to create and send messages around an IFS and to third party systems.
              </p>
              <hr class="my-4">
              <p>
                Dec 2020 - Current
              </p>
            </b-jumbotron>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Work"
}
</script>

<style scoped>

  .workDetailsContainer {
    margin-left: 15%;
    margin-right: 15%;
    margin-top:2%;
  }

  h1 {
    color: #e84f70;
    font-family: Vegan;
    font-size: xxx-large;
  }

  .noels {
    margin-left: 3em;
    margin-top: .5em;
  }

  .special-hr {
    margin-right: 10%;
    margin-left:10%;
    height: 10px;
    margin-bottom: 2%;
    border-radius: 5px;
    color: #CDB699;
    background-color: #CDB699;
  }

  @media screen and (max-width: 800px) {
    .noels {
      margin: 0%;
    }
    .workDetailsContainer {
      margin: 0%;
    }
  }
</style>