<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <b-container fluid>
      <div class="mb-5">
        <b-row class="">
          <b-col
            lg="2"
            v-for="app in getProducts"
            :key="app.id"
            col
            no-gutters
            class
          >
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <div class="">
                  <b-col md="12">
                    <b-card-img
                      :src="app.thumbnail"
                      alt="Image"
                      class="rounded-0 cover"
                      style="height:200px"
                    ></b-card-img>
                  </b-col>
                  <b-col md="12">
                    <b-card-body>
                      <b-card-text>
                        {{ app.title }}
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </div>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
      getProducts: []
    };
  },
  mounted() {
    console.log("app running");

    // call this in a differ file
    this.$http
      .get("/products")
      .then(response => {
        console.log("response", response.data);
        this.getProducts = response.data.products;
      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
    // end
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
