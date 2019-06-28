
<template>
  <div>
    <div>
      <h1>X 87 / 6.5</h1>
      <div class="barcode">
        <img src="../assets/asdf.png">
        <img src="../assets/zxcv.png">
      </div>
    </div>
  </div>
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
      sessionStorage.getItem("RIDDLES_LEVEL_V_ZAWARUDO") != 1
    ) {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.barcode {
  width: fit-content;
  margin: auto;
  border-radius: 10px;
  border: 4px dashed black;
  padding: 10px;
}
</style>
