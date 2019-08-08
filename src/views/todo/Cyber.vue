
<template>
  <div>
    <h1>Round Range Slider</h1>
    <div>x : {{x}}</div>
    <p>
      Value:
      <span id="demo">{{value}}</span>
    </p>
    <div class="slidecontainer">
      <div
        type="range"
        class="slider"
        :style="`left:${computedX}px`"
        @mousedown="captureOn"
        @mouseup="captureOff"
        @mousemove="mo"
      />
    </div>
    <div class="cybercontainer">
      <div id="day" class="cyber"></div>
      <div id="night" class="cyber"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return { captureToggle: false, x: window.innerWidth / 2, value: 50 };
  },
  methods: {
    mo: function(evt) {
      if (this.captureToggle) {
        console.log(window.innerWidth);
        let percetage = ((evt.x / window.innerWidth) * 100).toFixed(2);
        this.x =
          evt.x < window.innerWidth - 58 ? evt.x : window.innerWidth - 58;
        this.value = percetage;
      }
    },
    captureOn: function() {
      this.captureToggle = true;
    },
    captureOff: function() {
      this.captureToggle = false;
    }
  },
  computed: {
    computedX: function() {
      return this.x;
    }
  }
};
</script>

<style scoped>
.slider {
  width: 50px;
  height: 80vh;
  background: palevioletred;
  position: fixed;
  z-index: 99;
}
.slidecontainer {
  height: 80vh;
  margin: auto;
  z-index: 99;
}
#day {
  background-image: url(../../assets/day.png);
  z-index: 1;
}
#night {
  background-image: url(../../assets/night.jpg);
  z-index: 2;
}

.cyber {
  background-repeat: no-repeat;
  width: 80%;
  height: 400px;
  position: fixed;
  top: 200px;
  margin: auto;
}
.cybercontainer {
  position: relative;
  width: 80%;
  top: 10px;
  margin: auto;
  z-index: 1;
}
</style>
