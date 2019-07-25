<template>
  <div id="app">
    <router-view />
    <General id="general" />
    <audio autoplay loop preload v-if="playMusic">
      <source src="./assets/path.mp3" />
    </audio>
  </div>
</template>
<script>
import General from "./views/General.vue";

export default {
  beforeMount: function() {
    this.verifyRefresh();
  },
  components: {
    General
  },
  data: function() {
    return { playMusic: this.playMusicOrNot() };
  },
  watch: {
    $route(to, from) {
      this.playMusic = this.playMusicOrNot();
    }
  },
  methods: {
    verifyRefresh() {
      if (sessionStorage.getItem("RIDDLES_LEVEL_VII_DRAGONCAT") == 1) {
        this.$router.push("/avacado");
      } else if (
        localStorage.getItem("GIVEMEADIFFERENTVALUETHENREFRESH") === "yes"
      ) {
        this.$router.push("/aintnowayout");
      } else if (!localStorage.getItem("GIVEMEADIFFERENTVALUETHENREFRESH")) {
        this.$router.push("/");
      } else if (
        this.$router.currentRoute.name === "notFound" ||
        !this.$router.currentRoute.name
      ) {
        this.$router.push("/realDB");
      }
    },
    playMusicOrNot() {
      return (
        (sessionStorage.getItem("RIDDLES_LEVEL_I_VUE") == 1 &&
          sessionStorage.getItem("RIDDLES_LEVEL_II_CIRCLES") == 1 &&
          sessionStorage.getItem("RIDDLES_LEVEL_III_TIME") == 1 &&
          sessionStorage.getItem("RIDDLES_LEVEL_IV_LOCATION") == 1 &&
          sessionStorage.getItem("RIDDLES_LEVEL_V_ZAWARUDO") == 1 &&
          sessionStorage.getItem("RIDDLES_LEVEL_VI_3DTRANSFORM") == 1) ||
        sessionStorage.getItem("RIDDLES_LEVEL_VII_DRAGONCAT") == 1 ||
        sessionStorage.getItem("RIDDLES_LEVEL_VIII_TREASURE") == 1
      );
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
  user-select: none;
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

.descriptive {
  font-size: 30px;
  font-weight: bold;
  display: inline;
  margin: 10px;
  font-family: "Courier New", Courier, monospace;
}

.delightful {
  color: royalblue;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}
</style>
