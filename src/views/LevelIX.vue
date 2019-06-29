
<template>
  <div class="flashy">Congrats!!!, you've made it to the last level(currently)</div>
</template>
<script>
export default {};
</script>

<style scoped>
@-webkit-keyframes flashy {
  0% {
    color: gold;
    opacity: 1;
  }
  22% {
    color: rosybrown;
  }
  77% {
    color: royalblue;
  }
  100% {
    color: #42b983;
  }
}

.flashy {
  animation: flashy 1200ms ease-in-out 0s infinite;
  font-size: 50px;
}
</style>
