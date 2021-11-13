<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" width="25%">
    <HelloWorld msg="Hello Vue in CodeSandbox!"/> -->
    <p v-html="html"></p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import html from "./assets/test1/Airtame.html";
import cssstyle from "./assets/test1/Airtame.css";
import cssstyle2 from "./assets/test1/nicepage.css";
import img from "./assets/test1/images/8.jpg";
import { mdiBluetoothConnect } from "@mdi/js";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      html,
      img,
      cssstyle, // es6 property shorthand syntax
    };
  },
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
