<template>
  <section class="bgImage">
    <div class="container d-flex align-items-center justify-content-center">
      <img :src="bgImg?.url" alt="">
      <Clock />
      <button type="button" class="btn btn-primary" @click="changeTimeFormat()"> Change Time Format</button>
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
      bgImg: computed(() => AppState.backgroundImage?.url)
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
}

img {
  height: 200px;
  width: 200px;
}
</style>