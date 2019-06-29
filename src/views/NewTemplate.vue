
<template>
  <div>
    <canvas id="canvas" width="1000" height="1000" ref="canvas"></canvas>
  </div>
</template>
<script>
export default {
  mounted: function() {
    this.loop();
  },
  methods: {
    // called when user clicks the mouse
    checkIfOnCircle: function(point, radius, mousePos) {
      const offset = 50;
      let distance = Math.sqrt(
        Math.pow(point.x - mousePos.x, 2) + Math.pow(point.y - mousePos.y, 2)
      );

      return distance < radius + offset && distance > radius - offset;
    },
    handleMouseDown: function(e) {
      e.preventDefault();
      // get the mouse position
      let mouseX = parseInt(e.clientX - offsetX);
      let mouseY = parseInt(e.clientY - offsetY);
      if (
        this.checkIfOnCircle({ x: 500, y: 500 }, 300, { x: mouseX, y: mouseY })
      ) {
        console.log("on the mark", rotateVar);
      }
    },
    loop: function() {
      // canvas letiables
      let canvas = this.$refs.canvas;
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 1000, 1000); // clear canvas

      let canvasOffset = { left: canvas.offsetLeft, top: canvas.offsetTop };
      let offsetX = canvasOffset.left;
      let offsetY = canvasOffset.top;
      let scrollX = canvas.scrollLeft;
      let scrollY = canvas.scrollTop;
      // set styles
      ctx.fillStyle = "skyblue";
      ctx.strokeStyle = "lightgray";
      ctx.lineWidth = 2;
      ctx.save();

      ctx.translate(500, 500);

      ctx.globalCompositeOperation = "destination-over";
      // create a triangle and parallelogram object

      let triangle = {
        points: [
          {
            x: -50,
            y: 0
          },
          {
            x: -25,
            y: -50
          },
          {
            x: 0,
            y: 0
          }
        ],
        message: "I am a triangle"
      };

      // save the triangle and parallelogram in a shapes[] array

      let shapes = [];
      shapes.push(triangle);

      // function to draw (but not fill/stroke) a shape
      // (needed because isPointInPath only tests the last defined path)

      function define(shape) {
        let points = shape.points;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
      }

      // function to display a shape on the canvas (define + fill + stroke)

      function draw(shape) {
        define(shape);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      let time = new Date();
      let rotateVar =
        ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds();
      ctx.rotate(rotateVar);
      ctx.translate(325, 0);

      // display the triangle and parallelogram
      draw(triangle);

      ctx.beginPath();
      ctx.arc(500, 500, 300, 0, Math.PI * 2, true); // Outer circle
      ctx.stroke();
      ctx.restore();
      ctx.save();

      // listen for mousedown events
      canvas.addEventListener("mousedown", this.handleMouseDown);
      window.requestAnimationFrame(this.loop);
    }
  },
  destroyed: function() {
    window.cancelAnimationFrame(this.loop);
  }
};
</script>

<style scoped>
</style>
