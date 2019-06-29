<template>
  <div class="out">
    <h1>Let me out!!!</h1>
    <h2>Who keeps me here</h2>
    <div class="side">
      <button @click="restart()" v-if="showRestart">
        <h1>(You've been really struggle) GIVE UP (I promise it is restarting the game)</h1>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  beforeCreate: function() {
    let refreshTime = parseInt(localStorage.getItem("REFRESH_TIME"), 10);
    if (!isNaN(refreshTime)) {
      localStorage.setItem("REFRESH_TIME", refreshTime + 1);
    } else {
      localStorage.setItem("REFRESH_TIME", 1);
    }
  },
  data: function() {
    return {
      showRestart: parseInt(localStorage.getItem("REFRESH_TIME"), 10) > 10
    };
  },
  mounted: function() {
    localStorage.setItem("GIVEMEADIFFERENTVALUETHENREFRESH", "yes");
  },
  methods: {
    restart: function() {
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.side {
  position: relative;
  top: 100px;
}
</style>
