<template>
  <div class="intro">
    <h1>Welcome to Browser Riddles</h1>
    <p>A nonstop journey of learning web development</p>
    <p>Bon voyage!</p>
    <button @click="function(){$router.replace('/competitor')}" class="start">Start</button>
  </div>
</template>
<script>
</script>
<style scoped>
.start {
  width: 400px;
  font-size: 40px;
  border-radius: 12px;
  background: #2196f3;
}
p {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 30px;
  font-weight: bold;
}
</style>

