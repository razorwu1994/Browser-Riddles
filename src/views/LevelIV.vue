<template>
  <div>
    <h1>{{data[0].description}}</h1>
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
        "https://my-json-server.typicode.com/razorwu1994/fakeDB/realDB"
      );
      res = await res.json();
      this.data = res;
    }
  },
  beforeCreate: function() {
    if (localStorage.getItem("GIVEMEADIFFERENTVALUETHENREFRESH") === "yes") {
      this.$router.push("/aintnowayout");
    } else {
      sessionStorage.setItem("RIDDLES_LEVEL_IV_LOCATION", "1");
    }
  }
};
</script>

<style scoped>
</style>
