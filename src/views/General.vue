<template>
  <div class="general">
    <h1>Read Carefully Below Please!!!</h1>
    <!-- <button @click="goTodo()">
      <h2>TODO LIST</h2>
    </button>-->
    <h2>
      <p>The word after '/' is part of the level</p>
      <p>
        To step forward, all you need is to find a keyword from current level
        and replace it with the current word after last '/'
      </p>
    </h2>
    <h3>
      Some levels may contain audio/video file, so please make sure lower down
      your volume a bit to avoid any unpleasant experience :)
    </h3>
    <div
      class="hintWrapper"
      :style="`grid-template:${displaySpoiler ? `50% 50%` : `100%`} !important`"
    >
      <button @click="toggleHint()" class="hintBtn">
        <h2>HINTS</h2>
      </button>
      <button @click="toggleCore()" class="coreBtn" v-if="displaySpoiler">
        <h2>SPOILER</h2>
      </button>
    </div>
    <span v-if="getHintsStatus()" class="hint">{{ renderHint() }}</span>
    <span v-if="getCoreStatus() && displaySpoiler" class="hint">{{
      renderCore()
    }}</span>
  </div>
</template>
<script>
import { setInterval } from "timers";
const HINTS = {
  "/competitor": "What is this item",
  "/howManyEllipses":
    "Now you know it is a react logo right? Simple enough, how many Ellipses in each logo and then ho....",
  "/12": "What the hell is a Promise",
  "/internet":
    "Who is 'Who'? and Who is 'Me', where could an external(if not from the same project) data come from",
  "/realDB":
    "Words doesn't really make sense, try to find out other info with your favorite dev tool",
  "/aintnowayout":
    "Cheers to complete the part I of this level, What/Who keeps me here? Try to find it and escape. Do not give up",
  "/masbarcode": "Wow, a barcode, can CSS help instead of bending your neck?",
  "/avacado":
    "Avacado is just a typo, sorry about that. Try to focus on what is really broken",
  "/florida":
    "What are the few things come to your mind when talk about florida, sunshine, disney world, Ernest Hemingway? ",
  "/bamboozle":
    "What needs to be freed? And what could be possibly tricky if you've seen it a lot of times",
  "/welcomeToBWorld":
    "Why would the silly developer provide this source code here and can you find a place to use it?",
  "/spiderman": "Who am I, dark spiderman or you can call me?",
};
const CORES = {
  "/competitor": `Do you know you can right click on an image and "search google for image", find out what other frameworks folks may search for.`,
  "/howManyEllipses":
    "In browsers, what is displaying in front of your eyes may not always be truth, images can be stacked together, there are some brotherhood images stacking if you know to use developer tool and look at elements tab to find out.",
  "/12":
    "No matter Vue or React, its core programming language is Node JS(Normally people refers it to Javascript but they are actually slightly different), one of the core concept is called Promise, modern Node JS supports a type of function called 'async' to deal with it",
  "/internet":
    "When you open your favorite developer tool and check there is no hidden information in elements tab. Where could be information come from? Remember we are using internet right now, check out network and try to find a special request",
  "/realDB":
    "This part should be relatively easy if you find elements with 'lookatme' class",
  "/aintnowayout":
    "What is persistent in browser(even if you closed this tab and reopen it, like shopping in Amazon), have you heard about session/cookies? Try to checkout application tab in chrome and find a special value pair in localstorage(this level using this concept)",
  "/masbarcode":
    "Not a real barcode, but do you know you can perform some 3D image transformations with live CSS editing in the browser?",
  "/avacado":
    "Have you found JAYPACK sound like JPEG? Have you checked the HTTP CODE on network request. The extension of a file isn't always trusty, so open file carefully from a unknown resource because you may be taking risk of turning on a malware script.",
  "/florida":
    "Browser can detect mouse/keyboard event, this level is more like a riddle than knowledge test, there is Key West down in Florida, but in geography location, it is considering as the southern most of USA (at least East Coast from what i know, lol),so try to move your mouse to southern most of this page and 'stay' for a few seconds.",
  "/bamboozle":
    "Disableing buttons in web development is more a visual cue than acutally blocking on something if the developer implements the clicking event hanlder properly, so remember you can always enable a disabled button with live CSS editting. In some out-dated web sites, web page elements may be replaced with a faked malicious elements for certain purpose.",
  "/welcomeToBWorld":
    "Do you know you can actually write mini code/program in browser console tab and use JQuery($ symbol) to speed up the elements selecting process.",
  "/spiderman":
    "Dark version of spiderman is its villain, vendom, and this program itself is made of ? The web page logo and first level should tell you the key",
};
export default {
  mounted() {
    setInterval(() => {
      this.spoilerCount++;
    }, 1000);
  },
  data: function() {
    return { hintsOn: false, coresOn: false, spoilerCount: 0 };
  },
  computed: {
    displaySpoiler() {
      return this.spoilerCount > 60;
    },
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
    },
  },
};
</script>

<style>
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
  z-index: -1;
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
  transform: scale(1.01);
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
}

h2 > p {
  font-style: italic;
}
</style>
