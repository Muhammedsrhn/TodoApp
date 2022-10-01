<template>
  <div id="app">
    <Navbar />
    <div id="nav">
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Form from "./views/Form.vue";

export default {
  name: "App",
  components: { Navbar, Form }
}
</script>

<style>

</style>
