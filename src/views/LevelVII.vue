
<template>
  <div>
    <broken>
      <audio autoplay loop preload>
        <source src="https://www.dropbox.com/s/6u8pgtpenw0bd8x/song.mp3?dl=0" />
        <INTO />
        <JAY />
        <PACK Just say it out loudly and proudly></PACK>
      </audio>
    </broken>
    <span class="delightful">
      Here you are, congrats on making this way, enjoy this little bonus music track. From now on, you can directly go to
      <h2>/avacado</h2>to continue your browser riddle adventure
    </span>
    <div class="descriptive">
      <br />One of my song is broken, can you post & fix it
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
