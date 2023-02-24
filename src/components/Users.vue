<template>
  <div v-if="idTest" class="submit-form">
    <div>
      <div class="form-group">
        <label for="title">ID:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="idTest.id"
          name="name"
          readonly
        />
      </div>

      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="idTest.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="idTest.email"
          name="email"
        />
      </div>

      <!-- <button @click="updateTutorial" class="btn btn-success">Submit</button> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorials",
  props: ["idTest"],
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
    updateTutorial() {
      TutorialDataService.update(this.idTest.id, this.idTest)
        .then(response => {
          this.message = "The tutorial was updated successfully!";
          /* eslint-disable */
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
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
