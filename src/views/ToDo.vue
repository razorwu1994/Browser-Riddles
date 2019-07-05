
<template>
  <div class="flashy">
    <ul>
      <li v-for="(todo,i) in todoList" :key="`${i}-item`">{{todo}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      todoList: [
        "and or xor nand nor",
        "loader幻觉 （x）",
        "John Wick Three decipher",
        "api book for answer",
        "积木拼接做fibonacci",
        "旋转按钮"
      ]
    };
  }
};
</script>

<style scoped>
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

.flashy {
  animation: flashy 1200ms ease-in-out 0s infinite;
  font-size: 50px;
  text-align: left;
}
</style>
