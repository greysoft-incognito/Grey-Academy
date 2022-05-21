<template>
  <!-- Seventh section  -->
  <div class="bg-primary seventh_section bg_props relative-position">
    <div class="seventh_text text-h2 flex flex-center text-white">
      <div class="text-center text-bold join">
        Join our growing community
        <span class="text-bold">of trained professionals.</span>
      </div>
    </div>
    <div class="grid_images">
      <q-img
        class="seventh_image"
        v-for="community in communities"
        :key="community.id"
        :src="community.image"
      />
    </div>
  </div>
</template>

<script>
import communities from "src/Data/community";
export default {
  data() {
    return {
      communities,
    };
  },
};
</script>

<style scoped>
.seventh_section {
  padding: 15% 0 0;
  margin: 0 0 5%;
}
.seventh_text {
  position: absolute;
  height: 90vh;
  width: 100%;
  z-index: 1;
  background: rgb(77, 0, 1, 0.6);
  padding: 0 8%;
}
.seventh_text div {
  line-height: 1.4;
}
.grid_images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.seventh_image {
  width: 100%;
  height: 30vh;
}
@media screen and (max-width: 650px) {
  .join {
    font-size: 3.3rem !important;
  }
}
@media screen and (max-width: 601px) {
  .seventh_image {
    width: 100%;
    height: 27vh;
  }
  .seventh_text {
    height: 81vh;
    width: 100%;
  }
}
@media screen and (max-width: 551px) {
  .join {
    font-size: 2.8rem !important;
  }
}
@media screen and (max-width: 450px) {
  .join {
    font-size: 2rem !important;
    line-height: 1.5 !important;
  }
  .seventh_image {
    width: 100%;
    height: 20vh;
  }
  .seventh_text {
    height: 60vh;
    width: 100%;
  }
}
</style>
