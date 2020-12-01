<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <!--add a form that uses as 'addLink' method-->
      <form @submit.prevent="addLink">
        <input
          class="link-input"
          type="text"
          placeholder="Add a Link"
          v-model="newLink"
        />
      </form>

      <!-- render mapState header and links in the template using the v-for function -->
      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">
          {{ link }}
          <button v-on:click="removeLinks(index)" class="rm">Remove</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <stats />
    </div>
  </div>
</template>

<script>
// mapState is a helper to allow access to the state from Vuex

import Stats from "@/components/Stats.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      newLink: "",
    };
  },
  components: {
    Stats,
  },

  // object spread operater added
  computed: {
    ...mapState(["title", "links"]),
  },
  methods: {
    ...mapMutations([
      //Use the mapMutations helper to import our ADD_LINK mutation
      "ADD_LINK",
    ]),
    ...mapActions(["removeLink"]),
    addLink: function () {
      //call ADD_LINK mutation and pass in this.newLink
      this.ADD_LINK(this.newLink);
      this.newLink = ""; //reset to empty when ENTER key is pressed
    },
    removeLinks: function (link) {
      this.removeLink(link); //from mapActions
    },
  },
};
</script>

<style>
html,
#app,
.home {
  height: 100%;
}
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}

.hello {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}

.left,
.right {
  padding: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

.right {
  grid-area: right;
  background-color: #e9e9e9;
}
input {
  border: none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 50px;
  outline: none;
}
.rm {
  float: right;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #f9d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
}
</style>
