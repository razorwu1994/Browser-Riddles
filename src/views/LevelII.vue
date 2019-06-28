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
      this.$router.push("/aintnowayout");
    } else {
      sessionStorage.setItem("RIDDLES_LEVEL_II_CIRCLES", "1");
    }
  }
};
</script>

<style scoped>
#tripletsWrapper {
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80vw;
}
.triplets {
  position: absolute;
}
#bigbrohda {
  z-index: 9999999999;
}

#middlebrohda {
  z-index: 2;
}
#lilbrohda {
  z-index: 1;
}
</style>
