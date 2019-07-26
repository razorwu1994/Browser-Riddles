<template>
  <div>
    <div ref="board">
      <h2>Why won't you give</h2>
      <h1>Me Myself & I</h1>
      <h2>One try</h2>
    </div>
    <div class="canvasWrapper">
      <canvas id="canvas" width="500" height="200" style="border:2px solid black" ref="canvas"></canvas>
    </div>
    <div v-if="computedDrawingV">
      <h2>You reached the /ceiling</h2>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      mousePressed: false,
      lastX: 0,
      lastY: 0,
      ctx: {},
      drawingV: false,
      drawingArray: []
    };
  },

  mounted: function() {
    let canvas = this.$refs.canvas;
    this.ctx = canvas.getContext("2d");
    canvas.addEventListener("mousedown", e => {
      this.mousePressed = true;
      this.draw(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, false);
    });
    canvas.addEventListener("mousemove", e => {
      if (this.mousePressed) {
        this.draw(
          e.pageX - canvas.offsetLeft,
          e.pageY - canvas.offsetTop,
          true
        );
      }
    });

    canvas.addEventListener("mouseup", e => {
      this.mousePressed = false;
    });

    canvas.addEventListener("mouseleave", e => {
      this.mousePressed = false;
    });

    this.$refs.board.addEventListener("mousedown", this.clearArea);
  },
  methods: {
    getAngle: function(ex, ey, cx, cy) {
      let dy = ey - cy,
        dx = ex - cx;
      let theta = Math.atan2(dy, dx);
      theta *= 180 / Math.PI; // rads to degs
      return theta;
    },
    draw: function(x, y, isDown) {
      if (isDown) {
        let temp = [...this.drawingArray];
        let drawingAngle = this.getAngle(this.lastX, this.lastY, x, y);

        if (Math.abs(drawingAngle) <= 150 && Math.abs(drawingAngle) >= 100) {
          temp.push(true);
        } else {
          temp.push(false);
        }
        this.drawingArray = temp;
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 5;
        this.ctx.lineJoin = "round";
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(x, y);
        this.ctx.closePath();
        this.ctx.stroke();
      }
      this.lastX = x;
      this.lastY = y;
    },
    clearArea: function() {
      // Use the identity matrix while clearing the canvas
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.drawingArray = [];
    }
  },
  computed: {
    computedDrawingV: function() {
      let falseCount = 0,
        trueCount = 0;
      this.drawingArray.forEach(v => {
        if (!v) falseCount++;
        else trueCount++;
      });
      return trueCount - falseCount > 5;
    }
  }
};
</script>
