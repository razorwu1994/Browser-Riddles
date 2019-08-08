
<template>
  <div @mousedown="captureOn" @mouseup="captureOff" @mousemove="mo" @mouseleave="captureOff">
    <h1 class="highlight">CyberPunk CQC</h1>
    <div class="slidecontainer">
      <div type="range" class="slider" :style="`left:${computedNight}px`" />
    </div>
    <div class="cybercontainer">
      <div id="day" class="cyber"></div>
      <div id="night" class="cyber" :style="`width:${computedNight}px !important`"></div>
    </div>
  </div>
</template>
<script>
import { setInterval } from "timers";
export default {
  data: function() {
    return { captureToggle: false, x: 0, value: 50, direction: 5 };
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
    computedDay: function() {
      return window.innerWidth - this.x;
    },
    computedNight: function() {
      return this.x;
    }
  },
  mounted: function() {
    let realOne = document.getElementById("general");
    realOne.setAttribute("style", "display:none");
    //good bye real one this time
    setInterval(() => {
      if (this.x < 2000 && this.x >= 0) {
        this.x += this.direction;
      } else {
        this.direction = -1 * this.direction;
        this.x += this.direction;
      }
    }, 10);
  }
};
</script>

<style scoped>
h1 {
  font-size: 80px;
}
.slider {
  width: 50px;
  height: 65vh;
  background: #607d8bb3;
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
  width: 100%;
}
#night {
  background-image: url(../../assets/night.png);
  z-index: 2;
}

.cyber {
  background-repeat: no-repeat;
  /* width: 80%; */
  height: 800px;
  position: fixed;
  top: 200px;
  margin: auto;
  background-position: center;
  background-size: 80vw 800px;
  background-attachment: fixed;
}
.cybercontainer {
  top: 10px;
  margin: auto;
}
</style>
