
<template>
  <div>
    <good>
      <audio autoplay loop preload>
        <source src="../assets/path.mp3">
      </audio>
    </good>
    <broken>
      <JAY src="../assets/path2.mp3"/>
      <PACK Just say it out loudly and proudly></PACK>
    </broken>
    <span
      class="delightful"
    >Here you are, congrats on making this way, enjoy this little bonus music track and from now on. You can directly go to /avacado as a saving progress</span>
    <div class="descriptive">
      <br>My second song is broken, can you post & fix it
    </div>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    sessionStorage.setItem("RIDDLES_LEVEL_VII_DRAGONCAT", "1");
  }
};
</script>

<style scoped>
</style>
