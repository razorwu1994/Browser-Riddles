
<template>
  <div>
    <div
      ref="hijack"
      :style="`font-size:${count%2*20+28}px; font-weight:bold`"
    >Hi I am jack, free me!!!</div>
    <div class="fake">
      <h1>General Rule:</h1>
      <h2>
        <p>Welcome to Browser Riddles</p>
        <p>To step forward, all you need is to find a keyword from current level and replace it with the current word after last '/'</p>
      </h2>
      <h3>Some levels may contain audio/video file, so please make sure lower down your volume a bit to avoid any unpleasant experience :)</h3>
      <div class="hintWrapper">
        <button @click="clickCount()" class="hintBtn" disabled>
          <h2>HINTS</h2>
        </button>
      </div>
      <div v-if="count>=3" class="hint">What are you looking for</div>
      <div v-if="count>=5" class="hint">See you soon</div>
      <div v-if="count>=8" class="hint">So close</div>
      <div v-if="count>=13" class="hint">Here you go</div>
      <div v-if="count>=21" class="hint">
        <button @click="redirectNextLevel" class="hintBtn">NEXT LEVEL</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return { count: 0 };
  },
  mounted: function() {
    let realOne = document.getElementById("general");
    realOne.setAttribute("style", "display:none");
    //good bye real one this time
  },
  methods: {
    clickCount() {
      this.count++;
      if (this.count >= 22) {
        this.count = 0;
      }
    },
    redirectNextLevel() {
      this.$router.push("/giveBackMyGeneral");
    }
  }
};
</script>

<style scoped>
.fake {
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
  z-index: 2;
}
.hint {
  font-size: 35px;
  color: rgb(234, 94, 117);
}
.hint:nth-child(odd) {
  font-size: 35px;
  color: rgb(234, 94, 117);
}

.hint:nth-child(even) {
  font-size: 35px;

  color: gold;
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
  grid-template-columns: 100%;
}
</style>
