<template>
  <div class="end">
    <div>
      <div v-if="sync !== async" class="descriptive">
        :( Why am I always late than
        <strong>the bottom 'guy'</strong>
      </div>
      <span>{{async}}</span>
    </div>
    <div>
      <button @click="syncIncrement()" class="descriptive">Click me Hard!!!!</button>
      {{sync}}
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data: function() {
    let init = new Date();
    init = `${init.getFullYear()}/${init.getMonth() + 1}/${init.getDate()}`;
    return {
      sync: init,
      async: init,
      init: init
    };
  },
  methods: {
    syncIncrement: function() {
      let tmp = new Date(new Date(this.sync).getTime() + 8.64e7);
      this.sync = `${tmp.getFullYear()}/${tmp.getMonth() + 1}/${tmp.getDate()}`;
      this.asyncIncrement().then(resolve => resolve);
    },
    asyncIncrement: async function() {
      const add = () =>
        new Promise(resolve =>
          setTimeout(() => {
            let tmp = new Date(new Date(this.async).getTime() + 8.64e7);
            this.async = `${tmp.getFullYear()}/${tmp.getMonth() +
              1}/${tmp.getDate()}`;
            resolve("done");
          }, Math.min(Math.random() * 5000 + 2000, 1500))
        );
      return await add();
    }
  },
  beforeCreate: function() {
    if (localStorage.getItem("GIVEMEADIFFERENTVALUETHENREFRESH") === "yes") {
      this.$router.push("/aintnowayout");
    } else {
      sessionStorage.setItem("RIDDLES_LEVEL_III_TIME", "1");
    }
  }
};
</script>

<style scoped>
.row {
}
</style>
