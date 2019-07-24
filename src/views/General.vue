<template>
  <div class="general">
    <h1>General Rule:</h1>
    <!-- <button @click="goTodo()">
      <h2>TODO LIST</h2>
    </button>-->
    <h2>
      <p>Welcome to Browser Riddles</p>
      <p>To step forward, all you need is to find a keyword from current level and replace it with the current word after last '/'</p>
    </h2>
    <h3>Some levels may contain audio/video file, so please make sure lower down your volume a bit to avoid any unpleasant experience :)</h3>
    <div class="spoilerWrapper">
      <button @click="toggleHint()" class="spoilerBtn">
        <h2>HINTS</h2>
      </button>
    </div>
    <span v-if="getHintsStatus()" class="hint">{{renderHint()}}</span>
  </div>
</template>
<script>
const HINTS = {
  "/competitor": "What is this item",
  "/howManyEllipses":
    "Now you know it is a react logo right? Simple enough, how many Ellipses in each logo and then ho....",
  "/12": "What the hell is a Promise",
  "/async":
    "Who is 'Who'? and Who is 'Me', where could an external(if not from the same project) data come from",
  "/realDB":
    "Words doesn't really make sense, try to find out other info with your favorite dev tool",
  "/aintnowayout":
    "Cheers to complete the part I of this level, What/Who keeps me here? Try to find it and escape. Do not give up",
  "/x87|6.5": "Wow, a barcode, can CSS help instead of bending your neck?",
  "/avacado":
    "Avacado is just a typo, sorry about that. Try to focus on what is really broken",
  "/florida":
    "What are the few things come to your mind when talk about florida, sunshine, disney world, Ernest Hemingway? ",
  "/bamboozle":
    "What needs to be freed? And what could be possibly tricky if you've seen it a lot of times",
  "/giveBackMyGeneral":
    "Why would the silly developer provide this source code here and can you find a place to use it?"
};
export default {
  data: function() {
    return { hintsOn: false };
  },
  methods: {
    renderHint() {
      let currentRoute = this.$router.currentRoute.fullPath;
      return HINTS[currentRoute];
    },
    toggleHint() {
      this.hintsOn = !this.hintsOn;
    },
    getHintsStatus() {
      return this.hintsOn;
    },
    goTodo() {
      this.$router.push("/todo");
    }
  }
};
</script>

<style scoped>
.general {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rosybrown;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  text-align: left;
  margin: 10px;
  border-radius: 4px;
  border: 2px dashed rosybrown;
}
.hint {
  font-size: 35px;
  color: rgb(234, 94, 117);
}

.spoilerBtn {
  background: rgba(234, 94, 117, 0.9);
  margin-bottom: 10px;
}
.spoilerBtn:hover {
  background: rgb(234, 94, 117);
  transform: scale(1.1);
  transition: all 0.5s;
}
.spoilerWrapper {
  text-align: center;
}
</style>
