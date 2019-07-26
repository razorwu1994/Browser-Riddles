<template>
  <div class="end">
    <h1>Me Myself & I</h1>
    <div class="canvasWrapper">
      <canvas id="canvas" width="500" height="200" style="border:2px solid black" ref="canvas"></canvas>
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
      ctx: {}
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

    canvas.addEventListener("mouseup", function(e) {
      this.mousePressed = false;
    });

    canvas.addEventListener("mouseleave", function(e) {
      this.mousePressed = false;
    });
  },
  methods: {
    draw: function(x, y, isDown) {
      if (isDown) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "red";
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
    }
  }
};
</script>
