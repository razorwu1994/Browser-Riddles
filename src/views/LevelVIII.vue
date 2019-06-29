
<template>
  <div @mousemove="handleMouseMove" class="descriptive">
    Where is the key staying overnight
    <div class="compassWrapper">
      <img
        class="compass"
        src="https://secure.img2-ag.wfcdn.com/im/23821347/resize-h700-p1-w700%5Ecompr-r85/2944/29445855/Metal+Compass+Wall+D%25E9cor.jpg"
      >
    </div>
    <div class="keywest" ref="keywest" v-if="displayKey">{{answer}}</div>
  </div>
</template>
<script>
import { setTimeout, setInterval } from "timers";
export default {
  data: function() {
    return {
      answer: "",
      south: false,
      displayKey: false
    };
  },
  created() {
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  mounted() {
    let start = new Date(),
      end = start;
    setInterval(() => {
      end = new Date();
      if (!this.south) {
        start = end;
      } else if ((end - start) / 1000 > 2) {
        this.displayKey = true;
        if (!this.answer) {
          this.answer = "Surpise mothe...";
        }
        this.$refs.keywest.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0) scale(1.0);  bottom:-30vh; font-size:50px;"
        );
        setTimeout(() => {
          this.answer = "Ahem, I meant grab the key and go to /polydactylCat";
        }, 1500);
      }
    }, 500);
  },
  destroyed() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  },

  methods: {
    handleMouseMove: function(evt, el) {
      let [h, w] = [window.innerHeight, window.innerWidth];
      if (
        evt.clientY > (h * 9) / 10 &&
        evt.clientX < w / 2 + h / 10 &&
        evt.clientX > w / 2 - h / 10
      ) {
        this.south = true;
      } else {
        this.south = false;
      }
      return;
    }
  }
};
</script>

<style scoped>
.keywest {
  transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1);
  position: relative;
  bottom: 50vh;
  width: max-content;
  margin: auto;
}
.compassWrapper {
  position: absolute;
  right: 0;
  top: 0;
}
.compass {
  width: 250px;
  margin: 15px;
}
</style>
