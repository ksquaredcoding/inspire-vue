<template>
  <div class="justify-content-end text-center weather-card" @click="changeTempUnit(this.tempUnit)">
    <div class="d-flex flex-column text-shadow">
      <p v-if="this.tempUnit == 'F'">{{ weather?.fahrenheit }}&deg; {{ this.tempUnit }}</p>
      <p v-else-if="this.tempUnit == 'C'">{{ weather?.celsius }}&deg; {{ this.tempUnit }}</p>
      <p v-else>{{ weather?.temp }}&deg; {{ this.tempUnit }}</p>
      <p>{{ weather?.getWeatherDesc() }}</p>
      <img :src="weather?.img" :alt="weather?.desc">
    </div>
  </div>
</template>


<script>
import { Weather } from "../models/Weather.js";
import { computed } from 'vue'
import { AppState } from "../AppState.js"

export default {
  props: {
    weather: { type: Weather, required: true }
  },
  setup(props) {
    return {
      props,
      tempUnit: computed(() => AppState.tempUnit),
      changeTempUnit(unit) {
        switch (unit) {
          case 'F':
            AppState.tempUnit = 'C'
            break
          case 'C':
            AppState.tempUnit = 'K'
            break
          case 'K':
            AppState.tempUnit = 'F'
            break
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.weather-card {
  background-color: rgba(25, 25, 25, 0.5);
  border-radius: 5px;
  padding: 0.2rem 0.5rem 0 0.5rem;
}
</style>