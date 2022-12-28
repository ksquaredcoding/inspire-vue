<template>
  <div class="justify-content-end text-center weather-card" @click="changeTempUnit(this.tempUnit)">
    <div class="d-flex flex-column text-shadow align-items-center">
      <p class="fs-4" v-if="this.tempUnit == 'F'">{{ weather?.fahrenheit }}&deg; {{ this.tempUnit }}</p>
      <p class="fs-4" v-else-if="this.tempUnit == 'C'">{{ weather?.celsius }}&deg; {{ this.tempUnit }}</p>
      <p class="fs-4" v-else>{{ Math.round(weather?.temp) }}&deg; {{ this.tempUnit }}</p>
      <p class="fs-4">{{ weather?.getWeatherDesc() }}</p>
      <img class="mx-1" :src="weather?.img" :alt="weather?.desc">
    </div>
  </div>
</template>


<script>
import { Weather } from "../models/Weather.js";
import { computed } from 'vue'
import { AppState } from "../AppState.js"

export default {
  props: {
    weather: { type: Object, required: true }
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
  flex-basis: 10em;

  img {
    height: 10em;
    width: 10em;
    flex-shrink: 1;
  }
}
</style>