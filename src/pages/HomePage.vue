<template>
  <div class="container d-flex align-items-center justify-content-center">
    <Clock />
    <button type="button" class="btn btn-primary" @click="changeTimeFormat()"> Change Time Format</button>
  </div>
</template>


<script>
import { computed } from 'vue'
import { AppState } from "../AppState.js";
import Clock from "../components/Clock.vue";
export default {
  setup() {
    return {
      changeTimeFormat() {
        if (AppState.timeFormat == 'standard') {
          AppState.timeFormat = 'military'
        } else if (AppState.timeFormat = 'military') {
          AppState.timeFormat = 'standard'
        }
      }
    };
  },
  components: { Clock }
}
</script>


<style lang="scss" scoped>

</style>