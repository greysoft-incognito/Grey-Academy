<template>
  <div class="hero text-white">
    <div class="hero_text q-my-auto">
      <div class="text-h3 text-bold q-my-lg">Welcome to Business School</div>
      <div class="text-justify text-subtitle1">
        The Grey Academy Product School offers leading practices in product
        management and product prototyping through an experiential learning
        process..
      </div>
    </div>
    <div class="testimony_image row items-center q-px-md">
      <q-space />
      <div class="image">
        <q-img src="Images/Homepage/testimonial.png" width="100%" />
      </div>
      <div class="q-ml-md testimonies" @click="this.$router.push('/ourstory')">
        <div class="text-subtitle1 text-bold">Read testimonials</div>
        <div class="text-caption">Over 50 success stories</div>
      </div>
    </div>
  </div>

  <div class="q-my-xl text-bold text-h4 text-center">Courses</div>

  <div>
    <div
      class="course row justify-center q-mt-xl"
      v-for="course in business"
      :key="course.id"
    >
      <q-img
        class="col-lg-3 col-md-4 col-sm-4 bg_props"
        :src="course.image"
      ></q-img>
      <div class="col-7 course_text flex content-between">
        <div class="">
          <div class="row">
            <q-btn
              label="Early Starter"
              text-color="primary"
              class="early_starter"
              flat
              no-caps
            />
            <q-btn
              label="Download Brochure"
              text-color="white"
              class="bg-primary q-ml-lg"
              flat
              no-caps
            />
          </div>
          <div class="q-my-lg text-h6 text-bold">{{ course.title }}</div>
          <div class="q-my-lg text-subtitle1">{{ course.description }}</div>
          <div class="q-mb-lg row items-center text-bold">
            <q-icon name="access_time" class="q-mr-sm" />
            <span>{{ course.time }} Months</span>
          </div>
        </div>
        <q-btn
          no-caps
          label="Enrol Now"
          size="1.1rem"
          flat
          text-color="white"
          class="bg-primary self-end"
        />
      </div>
    </div>
  </div>

  <div class="text-center q-my-xl q-py-md">
    <div class="text-h4 text-bold">Success Stories</div>
    <div class="text-subtitle1">
      What our students are saying about their learning experience
    </div>
    <div class="grid_stories">
      <q-img src="/Images/Design/design1.png" class="right" />
      <q-img src="/Images/Design/design2.png" class="top" />
      <q-img src="/Images/Design/design3.png" class="right" />
    </div>
  </div>
</template>

<script>
import business from "src/Data/Courses/business";

export default {
  name: "business",
  data() {
    return {
      business,
    };
  },
};
</script>

<style scoped>
.hero {
  /* height: 35vh; */
  padding: 4% 8%;
  background-image: url("/Images/Business/bizmain.png");
  background-color: rgb(77, 0, 1, 0.9);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.bg_props {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.course {
  background: rgb(162, 4, 23, 0.04);
  /* height: 60vh; */
  padding: 3% 8%;
}
.course_text {
  padding: 0 8% 0 5%;
}
.early_starter {
  background: rgb(196, 196, 196, 0.2);
}
.grid_stories {
  width: 60%;
  margin: 2% auto;
  display: grid;
  /* place-items: center; */
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-auto-rows: 200px;
}
.right {
  border-radius: 0 50px 50px 0;
}
.top {
  border-radius: 50px 50px 0 0;
}
</style>
