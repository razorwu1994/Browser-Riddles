<template>
  <div class="grid">
    <div v-for="mes in message" :key="mes">{{mes}}</div>
  </div>
</template>
<script>
export default {
  data: function() {
    let bMessage = [
      `01100111`,
      `01101111`,
      `00100000`,
      `01110100`,
      `01101111`,
      `00100000`,
      `01110011`,
      `01110100`,
      `01100101`,
      `01100001`,
      `01101101`
    ];
    for (let b in bMessage) {
    }

    return {
      message: {}
    };
  },
  methods: {
    charToMorsebinary(char) {}
  }
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>
