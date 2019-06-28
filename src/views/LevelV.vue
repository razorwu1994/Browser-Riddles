
<template>
  <div>
    <h1>
      <p>
        <JO class="jojo1">
          <span class="justStyle">P</span>assione
        </JO>
        <JO class="jojo2">
          <span class="justStyle">r</span>
          <span class="justStyle">e</span>ro
        </JO>
        <JO class="jojo3">
          <span class="justStyle">s</span>peedwagonnnnnmn
          <span class="justStyle">s</span>peedwagonnnnnmn
        </JO>
        <JO class="jojo4">
          <span class="justStyle">f</span>ighting gold
          <span class="justStyle">5</span>
        </JO>
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
  name: "LevelV",
  beforeCreate: function() {
    if (!localStorage.getItem("IWANNAADIFFENTVALUE")) {
      localStorage.setItem("IWANNAADIFFENTVALUE", "yes");
    }
    sessionStorage.setItem("RIDDLES_LEVEL_V_PAUL", "1");
  }
};
</script>

<style scoped>
.justStyle {
}
.jojo1 {
  color: rgb(234, 94, 117);
}
.jojo2 {
  color: rgb(0, 181, 57);
}
.jojo3 {
  color: rgb(153, 91, 218);
}
.jojo4 {
  color: rgb(255, 215, 0);
}
</style>
