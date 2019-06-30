
<template>
  <div class="flashy">Congrats!!!, you've reached the top of this tower</div>
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
