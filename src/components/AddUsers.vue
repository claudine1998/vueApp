<template>
  <div v-if="add && !idTest" class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="users.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="users.email"
          name="email"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <!-- <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div> -->
  </div>
</template>

<script>
/* eslint-disable */
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  props: ["add", "tutorials", "idTest"],
  data() {
    return {
      users: {
        id: null,
        name: "",
        email: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      const data = {
        id: this.tutorials[this.tutorials.length - 1],
        name: this.users.name,
        email: this.users.email
      };

      TutorialDataService.create(data)
        .then(response => {
          this.users.id = response.data.id;
          /* eslint-disable */
          console.log("create response", response.data);
          this.$emit("inputChange", response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
