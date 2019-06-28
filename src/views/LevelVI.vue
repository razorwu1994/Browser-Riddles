
<template>
  <div>Level 5 Your turn?</div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  name: "LevelV",
  beforeCreate: function() {
    if (
      sessionStorage.getItem("RIDDLES_LEVEL_I_VUE") != 1 ||
      sessionStorage.getItem("RIDDLES_LEVEL_II_CIRCLES") != 1 ||
      sessionStorage.getItem("RIDDLES_LEVEL_III_TIME") != 1 ||
      sessionStorage.getItem("RIDDLES_LEVEL_IV_LOCATION") != 1 ||
      sessionStorage.getItem("RIDDLES_LEVEL_V_PAUL") != 1
    ) {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.p {
}
</style>
