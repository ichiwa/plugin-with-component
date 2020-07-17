<template>
  <div id="app">
    <button v-on:click="onConfirm">confirm</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  onConfirm() {
    this.$confirm({ text: "削除しますか？" })
      .then(() => {
        console.log("ok");
      })
      .catch(() => {
        console.log("cancel");
      });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
