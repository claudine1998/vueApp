<template>
  <div class="col-md-12 mx-auto" style="max-width: 87vw;">
    <div class="col">
      <button class=" btn btn-md btn-primary mb-5" @click="showAdd">
        Create New User
      </button>
      <h4>Tutorials List</h4>

      <div class="row">
        <div
          class="card mb-2 mr-4"
          style="width: 18rem;"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          <!-- <img src="..." class="card-img-top" alt="..." /> -->
          <div class="card-body">
            <p class="card-text">
              {{ tutorial.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentTutorial.name }}
        </div>
        <div>
          <label><strong>Email:</strong></label>
          {{ currentTutorial.email }}
        </div>
        <button
          class="btn btn-md bg-warning"
          @click="editUser(currentTutorial)"
        >
          Edit
        </button>
        <button
          class="m-3 btn btn-md btn-danger"
          @click="removeAllTutorials(currentTutorial)"
        >
          Remove User
        </button>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Users to Update or Delete</p>
      </div>
    </div>

    <!-- Adding Tutorial -->
    <add-tutorial
      :add="add"
      :tutorials="tutorials"
      :idTest="idTest"
      v-on:inputChange="saveTutorial"
    />

    <!-- Edit Tutorial -->
    <tutorial :idTest="idTest" />
  </div>
</template>

<script>
/* eslint-disable */
import TutorialDataService from "../services/TutorialDataService";
import AddTutorial from "./AddUsers.vue";
import Tutorial from "./Users.vue";

export default {
  components: { AddTutorial, Tutorial },
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
      add: false,
      idTest: 0
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials(id) {
      console.log("Check");

      TutorialDataService.delete(id)
        .then(() => {
          console.log("this.tutorials delete", this.tutorials);

          // The old fashioned way:
          const indexToRemove = this.tutorials.findIndex(pl => pl.id === id.id);
          this.tutorials.splice(indexToRemove, 1);

          // this.tutorials.splice(index, id.id);

          // this.tutorials.splice(0, id.id);
          console.log("ffff", this.tutorials);
        })
        .catch(e => {
          console.log(e);
        });
    },
    showAdd() {
      console.log("showaddclick");
      this.add = true;
      console.log(this.showAdd);
    },
    saveTutorial(event) {
      this.tutorials = this.tutorials.concat(event);
    },
    editUser(id) {
      console.log("id test", id);
      this.idTest = id;
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
