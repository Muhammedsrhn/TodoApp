<template lang="tr">
 <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="navi" to="/">Home</router-link>
        <router-link class="navi"  to="/list">List</router-link>
        <router-link class="navi"  to="/form">Form</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: "Navbar"
}
</script>
<style>
  .navi{
    text-decoration: none;
    color: var(--bs-bg-opacity);
    padding: 5px;
  }

</style>