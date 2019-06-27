<template>
  <div id="tripletsWrapper">
    <img
      id="bigbrohda"
      class="logo triplets"
      alt="Vue logo"
      src="https://cdn.worldvectorlogo.com/logos/react.svg"
    >
    <img
      id="middlebrohda"
      class="logo triplets"
      alt="Vue logo"
      src="https://cdn.worldvectorlogo.com/logos/react.svg"
    >
    <img
      id="lilbrohda"
      class="logo triplets"
      alt="Vue logo"
      src="https://cdn.worldvectorlogo.com/logos/react.svg"
    >
  </div>
</template>
<script>
export default {
  beforeCreate: function() {
    if (localStorage.getItem("IWANNAADIFFENTVALUE") === "yes") {
      this.$router.push("*");
    } else {
      sessionStorage.setItem("RIDDLES_LEVEL_II_CIRCLES", "1");
    }
  }
};
</script>

<style scoped>
#tripletsWrapper {
  margin: auto;
  width: 80vw;
}
.triplets {
  position: relative;
}
#bigbrohda {
  z-index: 9999999999;
  right: -300px;
}

#middlebrohda {
  z-index: 2;
  left: 0px;
}
#lilbrohda {
  z-index: 1;
  left: -300px;
}
</style>
