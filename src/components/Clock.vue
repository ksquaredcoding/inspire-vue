<template>
  <div>
    <p class="fs-1 text-shadow">{{ currentTime }}</p>
  </div>
</template>


<script>
import { AppState } from "../AppState.js"
import { computed, watchEffect, onMounted } from 'vue'

export default {
  setup() {
    function standardClock() {
      let now = new Date()
      AppState.currentTime = now.toLocaleTimeString('en-us', { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    }
    function militaryClock() {
      let now = new Date()
      let ampm = ''
      if (now.getHours() >= 12) {
        ampm = ' PM'
      } else {
        ampm = ' AM'
      }
      AppState.currentTime = now.toLocaleTimeString('en-us', {
        hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"
      }) + ampm
    }
    watchEffect(() => {
      if (AppState.timeFormat == 'standard') {
        clearInterval(AppState.timeInterval)
        AppState.timeInterval = setInterval(standardClock, 1000)
      } else if (AppState.timeFormat == 'military') {
        clearInterval(AppState.timeInterval)
        AppState.timeInterval = setInterval(militaryClock, 1000)
      }
    })
    return {
      currentTime: computed(() => AppState.currentTime),
    }
  }
}
</script>


<style lang="scss" scoped>

</style>