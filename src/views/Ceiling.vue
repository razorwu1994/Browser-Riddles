
<template>
  <div class="flashy">To Be Continue</div>
</template>
<script>
export default {
  mounted: function() {
    let realOne = document.getElementById("general");
    realOne.remove();
    //good bye real one this time
  }
};
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
  margin: 40vh auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
