<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  beforeCreate: function() {
    if (localStorage.getItem("GIVEMEADIFFERENTVALUETHENREFRESH") === "yes") {
      this.$router.push("/aintnowayout");
    } else {
      sessionStorage.setItem("RIDDLES_LEVEL_I_VUE", "1");
    }
  }
};
</script>
