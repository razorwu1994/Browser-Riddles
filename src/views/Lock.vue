<template>
  <div class="out">
    <h1>Let me out!!!</h1>
    <h2>Who keeps me here</h2>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
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
