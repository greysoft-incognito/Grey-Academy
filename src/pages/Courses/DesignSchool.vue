<template>
  <div class="hero text-white">
    <div class="hero-writings q-my-auto">
      <div class="text-h3 text-bold q-my-lg welcome">
        Welcome to Design School
      </div>
      <div class="text-justify text-subtitle1">
        The Grey Academy data school is designed to help design enthusiasts
        kickstart their journey to learning analytics and data strategy, as well
        as helping profesionals advance in the data space.
      </div>
    </div>
    <!-- <div class="testimony_image row items-center q-px-md q-my-md">
      <q-space />
      <div class="image">
        <q-img src="Images/Homepage/testimonial.png" width="100%" />
      </div>
      <div class="q-ml-md testimonies">
        <div class="text-subtitle1 text-bold">Read testimonials</div>
        <div class="text-caption">Over 50 success stories</div>
      </div>
    </div> -->
  </div>

  <div class="q-my-xl text-bold text-h4 text-center">Courses</div>

  <div class="middle">
    <div
      class="course row justify-center q-mt-xl"
      v-for="course in design"
      :key="course.id"
    >
      <q-img
        loading="eager"
        class="col-lg-3 col-md-5 col-sm-5 bg_props course_image"
        :src="course.image"
      ></q-img>
      <div class="q-my-md col-lg-7 col-md-7 col-sm-7 course_div">
        <div class="">
          <div class="row q-gutter-x-xs no-wrap">
            <q-btn
              label="Early Starter"
              text-color="primary"
              class="early_starter"
              :to="`/learn/design/${course.id}`"
              flat
              no-caps
            />
            <q-btn
              label="Download Brochure"
              text-color="white"
              class="bg-primary"
              flat
              no-caps
            />
          </div>
          <div class="q-my-lg text-h6 text-bold">{{ course.title }}</div>
          <div class="q-my-lg text-subtitle1 subtitle">
            {{ course.description }}
          </div>
          <div class="row justify-between q-my-md">
            <div class="q-mb-lg row items-center text-bold q-my-auto price">
              <q-icon name="access_time" class="q-mr-sm" />
              <span>{{ course.time }} Months</span>
            </div>
            <q-btn
              :label="`NGN ${course.price}`"
              color="primary"
              outline
              :v-ripple="false"
              class="price"
            />
          </div>
        </div>
        <q-btn
          no-caps
          label="Register"
          size="1.05rem"
          @click="course_please(course.title), (register = true)"
          flat
          text-color="white"
          class="bg-primary self-end register"
        />
      </div>
    </div>
  </div>

  <q-dialog v-model="register" class="">
    <q-card style="max-width: 50vw; width: 100%" class="full-height modal">
      <RegisterCourse :coursed="this.courseName" />
    </q-card>
  </q-dialog>

  <SuccessStories />

  <!-- <div class="text-center q-my-xl q-py-md">
    <div class="text-h4 text-bold">Success Stories</div>
    <div class="text-subtitle1">
      What our students are saying about their learning experience
    </div>
    <div class="grid_stories">
      <q-img src="/Images/Design/design1.png" class="right" />
      <q-img src="/Images/Design/design2.png" class="top" />
      <q-img src="/Images/Design/design3.png" class="right" />
    </div>
  </div> -->
</template>

<script>
import { ref } from "vue";
import design from "src/boot/Data/Courses/design";
import RegisterCourse from "src/components/Homepage/RegisterCourse.vue";
import SuccessStories from "src/components/Homepage/SuccessStories.vue";

export default {
  name: "design",
  data() {
    return {
      design,
      register: ref(false),
      courseName: "",
    };
  },
  components: { RegisterCourse, SuccessStories },
  methods: {
    course_please(a) {
      // a.splice('Become a')
      this.courseName = a.split("Become a")[1];
      console.log(this.courseName);
    },
    setToLocal(singleCourse) {
      console.log(singleCourse);
      localStorage.setItem("course", JSON.stringify(singleCourse));
    },
  },
};
</script>

<style scoped>
.hero {
  /* height: 35vh; */
  padding: 2% 8%;
  background-image: url("/Images/Design/designmain.png");
  background-color: rgb(77, 0, 1, 0.9);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.hero-writings {
  width: 70%;
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
.course_div {
  padding: 0 8% 0 5%;
}
.early_starter {
  background: rgb(196, 196, 196, 0.2);
}
.grid_stories {
  width: 60%;
  margin: 2% auto;
  display: grid;
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
.testimony_image {
  width: 91.5%;
}
.image {
  cursor: pointer;
  width: 15%;
  height: 100%;
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
@media screen and (max-width: 800px) {
  .course_image {
    height: 50% !important;
  }
  .grid_stories {
    width: 80%;
    margin: 2% auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: 150px;
  }
}
@media screen and (max-width: 771px) {
  .welcome {
    font-size: 2.2rem;
  }
  .hero-writings {
    width: 100%;
  }
  .testimony_image {
    width: 100%;
  }
  .image {
    width: 20%;
  }
}

@media screen and (max-width: 600px) {
  .middle {
    padding: 0 10%;
  }
}

@media screen and (max-width: 501px) {
  .welcome {
    font-size: 1.9rem;
  }
  .more_text {
    font-size: 0.95rem;
  }
  .hero-writings {
    width: 100%;
  }
  .testimony_image {
    width: 100%;
  }
  .image {
    width: 30%;
  }
}
@media screen and (max-width: 425px) {
  .subtitle {
    font-size: 0.85rem !important;
  }
  .price {
    font-size: 0.7rem !important;
    font-weight: bold !important;
  }
  .register {
    width: 100% !important;
  }
  .testimonies div {
    font-size: 0.75rem !important;
  }
}
</style>
