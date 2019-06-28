<template>
  <div class="out">
    <h1>Let me out!!!</h1>
    <h2>Who keeps me here</h2>
  </div>
</template>
<script>
export default {
  mounted: function() {
    localStorage.setItem("IWANNAADIFFENTVALUE", "yes");
  }
};
</script>
