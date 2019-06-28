<template>
  <div>
    <h1>{{data[0].current}}</h1>
    <h3 id="hint">This text seems come from somewhere but where???</h3>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      data: "dd"
    };
  },
  name: "LevelIV",
  asyncComputed: {
    async getData() {
      let res = await fetch(
        "https://my-json-server.typicode.com/razorwu1994/fakeDB/info"
      );
      res = await res.json();
      this.data = res;
    }
  },
  beforeCreate: function() {
    if (localStorage.getItem("IWANNAADIFFENTVALUE") === "yes") {
      this.$router.push("/aintnowayout");
    } else {
      sessionStorage.setItem("RIDDLES_LEVEL_IV_LOCATION", "1");
    }
  }
};
</script>

<style scoped>
#hint {
  color: white;
}
</style>
