<template>
  <div class="intro">
    <h1>Welcome to Browser Riddles</h1>
    <p ref="des">- A nonstop journey of learning web development</p>
    <button
      @click="function() {
          $router.replace('/competitor');
        }
      "
      class="start"
    >
      Bon voyage!
    </button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      open: truse,
      displayAnimation: false,
    };
  },
  // created() {
  //   window.addEventListener("mousemove", this.handleMouseMove);
  // },
  // destroyed() {
  //   window.removeEventListener("mousemove", this.handleMouseMove);
  // },
  // mounted() {
  //   let start = new Date(),
  //     end = start;
  //   setInterval(() => {
  //     end = new Date();
  //     if (!this.open) {
  //       start = end;
  //     } else if ((end - start) / 1000 > 2) {
  //       this.$refs.des.innerHTML = `- A nonstop journey of learning web development.`;
  //       setTimeout(() => {
  //         this.displayAnimation = true;
  //       }, 1500);
  //     }
  //   }, 500);
  // },
  methods: {
    // handleMouseMove: function(evt, el) {
    //   let [h, w] = [window.innerHeight, window.innerWidth];
    //   let mouseX = parseInt(evt.clientX, 10);
    //   let mouseY = parseInt(evt.clientY, 10);
    //   if (mouseY > (h * 9) / 10 && mouseX < w / 10 + h / 10) {
    //     this.open = true;
    //   } else {
    //     this.open = false;
    //   }
    //   return;
    // }
  },
  // computed: {
  //   computedDisplayAnimation() {
  //     return this.displayAnimation;
  //   }
  // }
};
</script>

<style scoped>
.start {
  width: 400px;
  font-size: 40px;
  border-radius: 12px;
  background: #2196f3;
}
p {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  text-align: right;
}
</style>
