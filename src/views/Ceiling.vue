
<template>
  <div>
    <div class="flashy">To Be Continue</div>
    <div class="meow">
      <img src="../assets/nice.jpg" />
    </div>
  </div>
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
  animation: flashy 1500ms ease-in-out 0s infinite,
    moveUp 10000ms ease-in-out 0s infinite, shakeShack 1500ms linear 2s infinite;
  font-size: 50px;
  margin: 60vh auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: relative;
}

@-webkit-keyframes moveUp {
  0% {
    margin: 60vh auto;
  }
  50% {
    margin: 0vh auto;
  }
  100% {
    margin: 60vh auto;
  }
}

.meow {
  animation: shakeShack 1500ms ease-in-out 0s infinite;
  position: relative;
}

@-webkit-keyframes shakeShack {
  0% {
    left: 0px;
  }
  50% {
    left: 10vw;
  }
  100% {
    left: 0px;
  }
}
</style>
