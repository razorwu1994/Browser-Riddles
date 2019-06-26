<template>
  <div>
    <h1>{{data[0].current}}</h1>
    <h3 id="hide">This text seems come from somewhere but where???</h3>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      data: "dd"
    };
  },
  name: "LevelIII",
  asyncComputed: {
    async getData() {
      let res = await fetch(
        "https://my-json-server.typicode.com/razorwu1994/fakeDB/info"
      );
      res = await res.json();
      this.data = res;
    }
  }
};
</script>

<style scoped>
#hide {
  color: white;
}
</style>
