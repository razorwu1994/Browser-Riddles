<template>
  <div>
    <div class="answer grid">
      <div v-for="(row,i) in rowMessage" :key="`ans-${i}-col`">
        <div v-for="(item,j) in row" :key="`ans-${j}-item`" :class="`cipher-${j}`">
          <h2>{{item}}</h2>
        </div>
      </div>
    </div>
    <div class="way">
      <p class="code">
        <button @click="toggleKey()" id="gift" :gift="secretKey">
          <h1>{{`${!showKey?'Your Gift':secretKey}`}}</h1>
        </button>
      </p>
      <p v-for="(row,i) in codeMessage" :key="`way-${i}-col`" class="code">{{row}}</p>
    </div>
    <div id="fin" />
  </div>
</template>
<script>
const charDictionary = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
};
const secretKey = Math.floor(
  Math.random() * Object.values(charDictionary).length
);
const UNITS = 8;
const bVal = x => Math.pow(2, x);

const specialCipher = num => num * 8 + secretKey;
const numToBinary = num => {
  let restVal = num;
  let retStr = "";
  for (let i = 0; i < UNITS; i++) {
    let b = bVal(UNITS - i - 1);
    if (restVal - b >= 0) {
      retStr = retStr.concat("1");
      restVal = restVal - b;
    } else {
      retStr = retStr.concat("0");
    }
  }
  return retStr;
};
const cipher = char => {
  let result = "";
  //stage 1
  result = charDictionary[char.toLowerCase()];
  //stage 2
  result = specialCipher(result);
  return numToBinary(result);
};
export default {
  data: function() {
    let bMessage = [
      cipher("G"),
      cipher("O"),
      cipher("S"),
      cipher("P"),
      cipher("I"),
      cipher("D"),
      cipher("E"),
      cipher("R"),
      cipher("M"),
      cipher("A"),
      cipher("N")
    ];
    let rowMessage = [[], [], []];
    for (let i = 0; i < bMessage.length; i++) {
      let realIdx = i;
      if (realIdx % 3 === 0) {
        rowMessage[0].push(bMessage[i]);
      } else if (realIdx % 3 === 1) {
        rowMessage[1].push(bMessage[i]);
      } else {
        rowMessage[2].push(bMessage[i]);
      }
    }
    return {
      rowMessage: rowMessage,
      codeMessage: [
        `const gift = $("#gift").getAttribute('gift')`,
        "const getKey=(data)=>{return (parseInt(data,2)-gift)/8}",
        `const charDictionary = JSON.parse('{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26}')`,
        "const finalDecipher =(key)=>{const k = `${key}` ; return Object.keys(charDictionary)[getKey(k)-1]}",
        "let fin=[0,1,2,3].map(idx=>$$('.cipher'+'-'+idx).map(node=>finalDecipher(node.innerText))).flat().join('');",
        "$('#fin').innerText = fin.split('go').join('go/')"
      ],
      secretKey: secretKey,
      showKey: false
    };
  },
  methods: {
    toggleKey: function() {
      this.showKey = !this.showKey;
    }
  }
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
.way {
  text-align: left;
  margin-left: 15px;
  width: 600px;
  user-select: text;
}
.code {
  font-size: 20px;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  word-break: break-word;
}
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
#fin {
  animation: flashy 1200ms ease-in-out 0s infinite;
  font-size: 50px;
  text-align: left;
}
</style>
