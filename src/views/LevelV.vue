
<template>
  <div>
    <h1>
      <p>
        <JO class="jojo1">
          <span class="lookatme">P</span>assione
        </JO>
        <JO class="jojo2">
          <span class="lookatme">r</span>
          <span class="lookatme">e</span>ro
        </JO>
        <JO class="jojo3">
          <span class="lookatme">s</span>peedwagonnnnnmn
          <span class="lookatme">s</span>peedwagonnnnnmn
        </JO>
        <JO class="jojo4">
          <span class="lookatme">f</span>ighting gold
          <span class="lookatme">5</span>
        </JO>
      </p>
    </h1>
    <div v-if="this.key">
      <h2 class="tada">If you completed every level in this session, Go To /x87|6.5 please :)</h2>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      key:
        localStorage.getItem("GIVEMEADIFFERENTVALUETHENREFRESH") !== "yes" &&
        localStorage.getItem("GIVEMEADIFFERENTVALUETHENREFRESH") != null
    };
  },
  name: "LevelV",
  beforeCreate: function() {
    if (localStorage.getItem("GIVEMEADIFFERENTVALUETHENREFRESH") === "yes") {
      this.$router.push("/aintnowayout");
    }
    if (!localStorage.getItem("GIVEMEADIFFERENTVALUETHENREFRESH")) {
      localStorage.setItem("GIVEMEADIFFERENTVALUETHENREFRESH", "yes");
    }
    sessionStorage.setItem("RIDDLES_LEVEL_V_ZAWARUDO", "1");
  }
};
</script>

<style scoped>
.lookatme {
  line-height: inherit;
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
.tada {
  color: rgb(255, 120, 0);
}
</style>
