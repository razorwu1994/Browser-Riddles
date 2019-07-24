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
    <div class="hintWrapper">
      <button @click="toggleHint()" class="hintBtn">
        <h2>HINTS</h2>
      </button>
      <button @click="toggleCore()" class="coreBtn">
        <h2>CORE</h2>
      </button>
    </div>
    <span v-if="getHintsStatus()" class="hint">{{renderHint()}}</span>
    <span v-if="getCoreStatus()" class="hint">{{renderCore()}}</span>
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
const CORES = {
  "/competitor": `Do you know you can right click on an image and "search google for image", find out what other frameworks folks may search for.`,
  "/howManyEllipses":
    "In browsers, what is displaying in front of your eyes may not always be truth, images can be stacked together, there are some brotherhood images stacking if you know to use developer tool and look at elements tab to find out.",
  "/12":
    "No matter Vue or React, its core programming language is Node JS(Normally people refers it to Javascript but they are actually slightly different), one of the core concept is called Promise, modern Node JS supports a type of function called 'async' to deal with it",
  "/async":
    "When you open your favorite developer tool and check there is no hidden information in elements tab. Where could be information come from? Remember we are using internet right now, check out network and try to find a special request",
  "/realDB":
    "This part should be relatively easy if you find elements with 'lookatme' class",
  "/aintnowayout":
    "What is persistent in browser(even if you closed this tab and reopen it, like shopping in Amazon), have you heard about session/cookies? Try to checkout application tab in chrome and find a special value pair in localstorage(this level using this concept)",
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
    return { hintsOn: false, coresOn: false };
  },
  methods: {
    renderHint() {
      let currentRoute = this.$router.currentRoute.fullPath;
      return HINTS[currentRoute];
    },
    renderCore() {
      let currentRoute = this.$router.currentRoute.fullPath;
      return CORES[currentRoute];
    },
    toggleHint() {
      this.hintsOn = !this.hintsOn;
      this.coresOn = false;
    },
    getHintsStatus() {
      return this.hintsOn;
    },
    goTodo() {
      this.$router.push("/todo");
    },
    toggleCore() {
      this.coresOn = !this.coresOn;
      this.hintsOn = false;
    },
    getCoreStatus() {
      return this.coresOn;
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

button {
  margin: auto;
  margin-bottom: 10px;
  padding: 5px;
  width: 80%;
}
button:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}
.coreBtn {
  background: rgba(234, 94, 117, 0.9);
}
.hintBtn {
  background: #42b983;
}

.hintWrapper {
  text-align: center;
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
