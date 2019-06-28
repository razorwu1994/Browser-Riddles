<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  beforeMount: function() {
    this.verifyRefresh();
  },
  methods: {
    verifyRefresh() {
      if (localStorage.getItem("IWANNAADIFFENTVALUE") === "yes") {
        this.$router.push("/aintnowayout");
      } else if (!localStorage.getItem("IWANNAADIFFENTVALUE")) {
        this.$router.push("/");
      } else if (
        this.$router.currentRoute.name === "notFound" ||
        !this.$router.currentRoute.name
      ) {
        this.$router.push("/realDB");
      }
    }
  },
  destroyed() {
    sessionStorage.clear();
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
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  width: 300px;
}

button {
  border: 1px solid transparent;
  border-radius: 4px;
  user-select: none;
  color: white;
  background: #42b983;
}
</style>
