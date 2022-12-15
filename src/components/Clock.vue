<template>
  <div>
    <p class="fs-1 text-shadow">{{ currentTime }}</p>
  </div>
</template>


<script>
import { onMounted } from "vue"
import { watchEffect } from "vue"
import { AppState } from "../AppState.js"
import { computed } from 'vue'

export default {
  setup() {
    function checkTime(x) {
      if (x < 10) {
        x = '0' + x
      }
      return x
    }
    function standardClock() {
      let now = new Date()
      // let hours = now.getHours()
      // let minutes = now.getMinutes()
      // let seconds = now.getSeconds()
      // let ampm = 'AM'
      // if (hours > 12) {
      //   hours -= 12
      //   ampm = 'PM'
      //   hours = checkTime(hours)
      // } else {
      //   hours = checkTime(hours)
      // }

      // minutes = checkTime(minutes)
      // seconds = checkTime(seconds)

      // if (hours == 0) {
      //   hours = 12
      // }

      AppState.currentTime = now.toLocaleTimeString()
    }
    function militaryClock() {
      let now = new Date()
      let hours = now.getHours()
      let minutes = now.getMinutes()
      let seconds = now.getSeconds()
      let ampm = 'AM'
      hours = checkTime(hours)
      minutes = checkTime(minutes)
      seconds = checkTime(seconds)

      if (hours > 12) {
        ampm = 'PM'
      }

      AppState.currentTime = `${hours}:${minutes}:${seconds} ${ampm}`
    }
    onMounted(() => {
      if (AppState.timeFormat == 'standard') {
        const myInterval = setInterval(standardClock, 1000)
        clearInterval()
      } else if (AppState.timeFormat == 'military') {
        setInterval(militaryClock, 1000)
      }
    })
    watchEffect(() => {
      if (AppState.timeFormat == 'standard') {
        setInterval(standardClock, 1000)
      } else if (AppState.timeFormat == 'military') {
        setInterval(militaryClock, 1000)
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