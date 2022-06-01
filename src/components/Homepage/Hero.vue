<template>
  <div class="hero row bg-secondary relative-position">
    <div class="hero_text relative-position">
      <div class="h_one text-bold q-mb-md">
        <span class="text-primary">Learn with the</span> Best Anytime & Anywhere
      </div>
      <div class="q-my-lg text-h6 text-weight-light mission_text">
        Our mission is to help people learn with expert anytime and anywhere
      </div>
      <div class="button_show">
        <q-btn
          label="Explore Courses"
          no-caps
          @click="schools = true"
          icon-right="chevron_right"
          text-color="white"
          class="bg-primary q-mt-md button explore_button"
          size="1.2rem"
        />
        <div
          class="watch_text text-primary q-my-lg items-center text-subtitle2"
        >
          <q-icon
            name="play_circle"
            class="text-primary q-my-auto"
            size="1.1rem"
          />
          Watch: Why Grey Academy is important to scale your career
        </div>
      </div>
    </div>
    <img src="/Images/heroGuy.png" class="hero_image relative-position" />

    <div class="button_hide text-center">
      <q-btn
        label="Explore Courses"
        no-caps
        @click="schools = true"
        icon-right="chevron_right"
        text-color="white"
        class="bg-primary q-my-md button explore_button"
        size="1.2rem"
      />
      <!-- <div class="watch_text text-primary q-my-lg items-center text-subtitle2">
        <q-icon
          name="play_circle"
          class="text-primary q-my-auto"
          size="1.1rem"
        />
        Watch: Why Grey Academy is important to scale your career
      </div> -->
    </div>

    <div
      class="absolute-bottom testimony_image row items-center q-px-md q-my-md"
    >
      <div class="image">
        <img src="Images/Homepage/testimonial.png" width="100%" />
      </div>
      <div class="q-ml-md testimonies">
        <div class="text-subtitle1 text-bold">Read testimonials</div>
        <div class="text-caption">Over 50 success stories</div>
      </div>

      <!-- <q-space/> -->
    </div>
    <q-dialog v-model="schools" class="">
      <q-card style="max-width: 50vw; width: 100%; height: 70vh" class="school">
        <Schools />
      </q-card>
    </q-dialog>
    <!-- <div class="col-6 hero_image"></div> -->
  </div>
</template>

<script>
import { ref } from "vue";
import Schools from "../Schools.vue";
export default {
  components: { Schools },
  data() {
    return {
      schools: ref(false),
    };
  },
};
</script>

<style scoped>
.hero {
  line-height: 1.1;
}
.button_hide {
  display: none;
}
.school {
  border: 1px solid rgb(77, 0, 1, 0.75);
}
.testimony_image {
  top: 90%;
  left: 45%;
  transform: translate(-50%, -50%);
  padding: 0 8%;
}
.testimonies {
  cursor: pointer;
  /* visibility: hidden; */
}
.image:hover .testimonies {
  visibility: visible !important;
}
.testimonies:hover {
  color: green !important;
}
.testimonies div {
  text-decoration: underline;
  /* display: none; */
  /* visibility: hidden; */
}
@media screen and (max-width: 771px) {
  .school {
    max-width: 70vw !important;
    width: 100% !important;
    max-height: 70vh !important;
  }
  .button_show {
    display: none;
  }
  .button_hide {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
  .testimony_image {
    display: none;
  }
}

@media screen and (max-width: 520px) {
  .school {
    max-width: 90vw !important;
    width: 100% !important;
    max-height: 70vh !important;
  }
}
</style>
