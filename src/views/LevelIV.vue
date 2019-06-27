
<template>
  <div>
    <h1>
      <p>
        <span class="p">P</span>aul
        <span class="p">r</span>at<span class="p">e</span>s
        <span class="p">s</span>ong
        o<span class="p">f</span>
        <span class="p"> 5</span> seconds of summer
      </p>
    </h1>
    <div v-if="this.key">
      <h2>Go To /graduation please :)</h2>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      key:
        localStorage.getItem("IWANNAADIFFENTVALUE") !== "yes" &&
        localStorage.getItem("IWANNAADIFFENTVALUE") != null
    };
  },
  name: "LevelIV",
  beforeCreate: function() {
    if (!localStorage.getItem("IWANNAADIFFENTVALUE")) {
      localStorage.setItem("IWANNAADIFFENTVALUE", "yes");
    }
    sessionStorage.setItem("RIDDLES_LEVEL_IV_PAUL", "1");
  }
};
</script>

<style scoped>
.p {
}
</style>
