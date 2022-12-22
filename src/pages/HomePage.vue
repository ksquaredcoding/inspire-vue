<template>
  <section class="bgImage container-fluid">
    <div class="row justify-content-between">
      <div class="text-shadow p-2 m-2 col-3 text-start">
        <p class="fs-4"><strong>Image By: {{ copyright }}</strong></p>
      </div>
      <div class="col-3 text-end text-shadow">
        <p>weather</p>
      </div>
    </div>
    <div class="row align-items-center text-center">
      <Clock class="col-12" />
      <div>
        <button type="button" class="btn btn-primary" @click="changeTimeFormat()"> Change Time Format</button>
      </div>
    </div>
  </section>
</template>


<script>
import { computed, onMounted } from 'vue'
import { AppState } from "../AppState.js";
import Clock from "../components/Clock.vue";
import { backgroundImagesService } from "../services/BGImgsService.js";
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
    onMounted(() => {
      getBGImg()
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
      copyright: computed(() => AppState.backgroundImage?.copyright)
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
</style>