
<template>
  <div>
    <svg height="800" width="800">
      <circle
        v-bind:cx="circle.cx"
        v-bind:cy="circle.cy"
        v-bind:r="circle.r"
        v-bind:key="circle.id"
        v-bind:fill="circle.color[status[circle.id]]"
        v-bind:ref="circle.id"
        v-for="circle in circles"
      />
      <g v-for="(row, key) in text" :key="key">
        <text
          :x="txt.x"
          :y="txt.y"
          v-for="(txt,lowkey) in row"
          :key="lowkey"
          class="text"
        >{{txt.text}}</text>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  data: function() {
    let randText = rowIdx => {
      return new Array(6).fill(0).map((text, colIdx) => ({
        text: Math.random() > 0.5 ? 1 : 0,
        y: 280 + rowIdx * 100,
        x: 120 + colIdx * 80
      }));
    };
    return {
      circles: [
        {
          id: "control1",
          cx: "150",
          cy: "150",
          r: "75",
          color: { [true]: "#42b983", [false]: "#929ba7" }
        },
        {
          id: "control2",
          cx: "330",
          cy: "150",
          r: "75",
          color: { [true]: "#ffd700", [false]: "#929ba7" }
        },
        {
          id: "control3",
          cx: "510",
          cy: "150",
          r: "75",
          color: { [true]: "#ea5e75e6", [false]: "#929ba7" }
        }
      ],
      status: { control1: true, control2: true, control3: true },
      text: [randText(0), randText(1), randText(2)]
    };
  },
  mounted: function() {
    this.circles.forEach(circle => {
      this.$refs[circle.id][0].addEventListener("click", () => {
        this.toggleControl(circle.id);
      });
    });
  },
  methods: {
    toggleControl(ref) {
      this.status[ref] = !this.status[ref];
      this.$refs[ref][0].setAttribute("fill", this.color[this.status[ref]]);
    }
  }
};
</script>

<style scoped>
.text {
  font-size: 30px;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
