<template>
  <section class="bgImage container-fluid">
    <div class="row justify-content-between">
      <div class="text-shadow p-2 m-2 col-md-3 text-start">
        <p class="fs-4"><strong>Image By: {{ copyright }}</strong></p>
      </div>
      <Weather class="col-2 m-2 selectable" :weather="this.weather" v-if="this.weather?.desc" />
    </div>
    <div class="row align-items-center justify-content-center text-center p-2">
      <div class="col-12 clock-card p-3">
        <Clock />
        <div>
          <button type="button" class="btn btn-primary" @click="changeTimeFormat()"> Change Time Format</button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { computed, onMounted } from 'vue'
import { AppState } from "../AppState.js";
import Clock from "../components/Clock.vue";
import { backgroundImagesService } from "../services/BGImgsService.js";
import { weathersService } from "../services/WeathersService.js";
import Pop from "../utils/Pop.js";
export default {
  setup() {
    async function getBGImg() {
      try {
        await backgroundImagesService.getBackground()
      } catch (error) {
        console.error('[ERROR RETRIEVING BACKGOUND IMAGE]', error)
        Pop.error(error.message)
      }
    }
    async function getWeather() {
      try {
        await weathersService.getWeather()
      } catch (error) {
        console.error('[ERROR RETRIEVING WEATHER]', error)
        Pop.error(error.message)
      }
    }
    onMounted(() => {
      getBGImg()
      getWeather()
    })
    return {
      changeTimeFormat() {
        if (AppState.timeFormat == 'standard') {
          AppState.currentTime = null
          AppState.timeFormat = 'military'
        } else if (AppState.timeFormat = 'military') {
          AppState.currentTime = null
          AppState.timeFormat = 'standard'
        }
      },
      bgImg: computed(() => `url(${AppState.backgroundImage?.url})`),
      copyright: computed(() => AppState.backgroundImage?.copyright),
      weather: computed(() => AppState.weather)
    };
  },
  components: { Clock }
}
</script>


<style lang="scss" scoped>
.bgImage {
  background-image: v-bind(bgImg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}

.top-section {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.clock-card {
  background-color: rgba(25, 25, 25, 0.5);
  border-radius: 5px;
  width: 25em;
}
</style>