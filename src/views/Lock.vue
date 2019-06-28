<template>
  <div class="out">
    <h1>Let me out!!!</h1>
    <h2>Who keeps me here</h2>
    <div class="side">
      <button @click="restart()">
        <h1>(Not recommend)Restart game(get out!)</h1>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function() {
    localStorage.setItem("IWANNAADIFFENTVALUE", "yes");
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
