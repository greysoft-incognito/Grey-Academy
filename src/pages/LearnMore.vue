<template>
  <div>
    <!-- First section  -->
    <div class="hero relative-position">
      <!-- <q-img src="/Images/shape.png" class="" width="100%" /> -->
      <div
        style="
          background-image: url('/Images/shape.png');
          background-position: center;
          width: 100%;
          padding: 0 0 5%;
        "
      >
        <div class="">
          <q-img
            src="/Images/Learn/learn_hero.png"
            class="hero_man"
            width="50%"
          />
          <div
            class="text-h3 headings text-primary text-center text-bold q-mb-md hero_topic"
          >
            {{ courseArray.title }}
          </div>
          <!-- <div
            class="hero_text program_text text-justify text-primary text-bold q-mx-auto q-my-lg"
          >
            {{ courseArray.program }}
          </div> -->
          <!-- <div class="row">
            <q-space />
            <q-btn
              label="Enrol Now"
              @click="alert = true"
              style="width: 15%"
              color="primary"
              class="q-mt-md enrol"
              no-caps
              size="1.15rem"
            />
            <q-space />
          </div> -->
        </div>
      </div>
    </div>

    <div class="overview">
      <div class="text-h3 headings text-center text-primary text-bold q-my-xl">
        Course Overview
      </div>

      <div class="program_text">
        {{ courseArray.overview }}
      </div>

      <div class="text-bold text-h6 q-my-lg">
        Course Duration : {{ courseArray.time }} Months
      </div>
      <div class="q-my-lg">
        <div class="text-primary text-h5 text-bold">Prerequisites:</div>
        <ul>
          <li
            v-for="prerequisite in courseArray.prerequisites"
            :key="prerequisite.id"
            class="text-subtitle1"
          >
            {{ prerequisite }}
          </li>
        </ul>
      </div>

      <!-- <div class="q-my-lg">
        <div class="text-primary text-h5 text-bold">Content Features</div>
        <div class="text-subtitle1 q-ml-lg">
          {{ courseArray.course_features }}
        </div>
      </div> -->

      <div class="q-my-lg">
        <div class="text-primary text-h5 text-bold">Course Content</div>
        <ul>
          <li
            class="text-subtitle1"
            v-for="content in courseArray.course_content"
            :key="content.id"
          >
            {{ content }}
          </li>
        </ul>
      </div>

      <div class="q-my-lg">
        <div class="text-primary text-h5 text-bold">Course Benefits</div>
        <div class="text-subtitle1 text-bold">
          At the end of this course, students should be able to do/know the
          following:
        </div>
        <ul>
          <li
            class="text-subtitle1"
            v-for="benefit in courseArray.course_benefit"
            :key="benefit.id"
          >
            {{ benefit }}
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <q-space />
      <q-btn
        no-caps
        label="Register"
        @click="course_please(courseArray.title), (register = true)"
        size="1.05rem"
        style="width: 30%"
        flat
        text-color="white"
        class="bg-primary self-end register q-mb-xl q-mt-md"
      />
      <q-space />
    </div>
  </div>

  <q-dialog v-model="register" class="">
    <q-card style="max-width: 50vw; width: 100%; height: 70vh" class="modal">
      <RegisterCourse :coursed="this.courseName" />
    </q-card>
  </q-dialog>

  <!-- <q-dialog v-model="alert" class="bg-black">
    <q-card style="max-width: 60vw; width: 100%; height: 65vh">
      <Payment />
    </q-card>
  </q-dialog> -->

  <!-- What You will learn  -->
  <!-- <div class="bg-white what_you_learn">
    <div class="text-primary text-center text-h3 text-bold">
      What you will Learn
    </div>
    <div class="grid_cards q-my-xl q-pa-md">
      <div class="bg-dark card q-pa-lg">
        <div
          class="card_topic text-uppercase text-bold text-h6 text-center text-primary q-my-md"
        >
          Sql
        </div>
        <div
          class="card_description text-justify text-bold text-subtitle2 text-primary q-my-md"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          voluptatibus, iure voluptates quo, et repudiandae dolore fugiat
          reprehenderit incidunt corporis natus quisquam deserunt ea magni.
          Dicta doloremque at placeat laudantium.
        </div>
        <q-btn
          label="Enrol"
          no-caps
          color="primary"
          size="1.05rem"
          style="width: 40%"
        />
      </div>

      <div class="bg-dark card q-pa-lg">
        <div
          class="card_topic text-uppercase text-bold text-h6 text-center text-primary q-my-md"
        >
          Excel
        </div>
        <div
          class="card_description text-justify text-bold text-subtitle2 text-primary q-my-md"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          voluptatibus, iure voluptates quo, et repudiandae dolore fugiat
          reprehenderit incidunt corporis natus quisquam deserunt ea magni.
          Dicta doloremque at placeat laudantium.
        </div>
        <q-btn
          label="Enrol"
          no-caps
          color="primary"
          size="1.05rem"
          style="width: 40%"
        />
      </div>

      <div class="bg-dark card q-pa-lg">
        <div
          class="card_topic text-uppercase text-bold text-h6 text-center text-primary q-my-md"
        >
          Data Visualization
        </div>
        <div
          class="card_description text-justify text-bold text-subtitle2 text-primary q-my-md"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          voluptatibus, iure voluptates quo, et repudiandae dolore fugiat
          reprehenderit incidunt corporis natus quisquam deserunt ea magni.
          Dicta doloremque at placeat laudantium.
        </div>
        <q-btn
          label="Enrol"
          no-caps
          color="primary"
          size="1.05rem"
          style="width: 40%"
        />
      </div>
    </div>
  </div> -->

  <!-- Third Section  -->
  <!-- <div class="bg-dark third">
    <div class="row third_container">
      <div class="col-6">
        <div class="text-h3 text-bold learn_course q-my-lg">
          Learn Data Science Live, Led by Experienced Data Scientist.
        </div>
        <div class="text-subtitle1">
          Data Analysis as the name implies has to do with analysing data. A
          data analyst plays a pivotal role in organisations. Data Analysis is
          the process of inspecting, cleansing, transforming, and modelling data
          with the goal of discovering useful information, informing
          conclusions, and supporting decision-making..
        </div>
        <div class="q-my-lg">
          <q-btn label="Enrol Now" color="primary" no-caps size="1.1rem" />
          <q-btn
            label="Download Brochure"
            color="primary"
            no-caps
            size="1.1rem"
            class="q-ml-lg"
            outline
          />
        </div>
      </div>
      <div class="col-6 image_div">
        <div class="third_image"></div>
      </div>
    </div>
  </div> -->

  <!-- Fourth section  -->
  <!-- <div class="bg-white q-my-xl">
    <div class="text-center text-bold text-primary text-h3 q-mb-xl">
      Meet One of our Instructors
    </div>

    <div class="bg-dark video_container q-my-xl">
      <div class="video bg_props"></div>
    </div>
  </div> -->

  <!-- Fifth section  -->
  <!-- <div class="hero relative-position">
    <div class="instructors_container">
      <div class="instructors">
        <div class="text-h3 text-center text-primary text-bold q-my-xl">
          Meet Our Instructors
        </div>
        <div class="instructors_cards q-mt-xl">
          <div
            class="instructor_card"
            v-for="instructor in instructors"
            :key="instructor.id"
          >
            <q-img :src="instructor.image" />
            <div class="text-center text-primary q-my-md">
              <div class="text-bold q-my-sm">{{ instructor.name }}</div>
              <div class="q-my-xs">{{ instructor.position }}</div>
              <div class="q-my-xs">{{ instructor.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- <RegisterCourse style="width: 60%; margin: 0 auto" /> -->
  <!-- Success Stories  -->

  <SuccessStories />
  <Community />
</template>

<script>
import instructors from "src/boot/Data/Instructors";
import { ref } from "vue";
import Payment from "src/components/Payment/payment.vue";
import Community from "src/components/Homepage/Community.vue";
import RegisterCourse from "src/components/Homepage/RegisterCourse.vue";
import SuccessStories from "src/components/Homepage/SuccessStories.vue";

export default {
  name: "Learn",
  components: {
    Payment,
    Community,
    RegisterCourse,
    SuccessStories,
  },
  data() {
    return {
      instructors,
      alert: ref(false),
      courseArray: [],
      register: ref(false),
    };
  },
  methods: {
    course_please(a) {
      // a.splice('Become a')
      this.courseName = a.split("Become a")[1];
      console.log(this.courseName);
    },
  },
  // created() {
  //   this.$watch(
  //     (e) => this.$route.params,
  //     (param) => {
  //       const course = this.$loaded[param.type].filter(
  //         (e) => e.id === param.id
  //       );
  //       console.log(course);
  //       console.log(this.$loaded[param.type].filter((e) => e.id === param.id));

  //       // this.setToLocal();
  //     },
  //     { immediate: true, deep: true }
  //   );
  // },
  mounted() {
    // let courses = JSON.parse(localStorage.getItem("course"));
    // console.log(courses);
    // this.courseArray = courses;
    // console.log(this.$route.params.course);

    let courseId = this.$route.params.course;
    let type = this.$route.params.type;
    let courses = this.$loaded;
    let cat = courses[type];
    let course = null;
    // console.log(courseId);
    // console.log(courses[type]);
    cat.forEach((element) => {
      // console.log(element);
      if (element.id == courseId) this.courseArray = element;
    });
    // console.log(this.courseArray);
  },
};
</script>

<style>
.program_text {
  font-size: 1.1rem;
}
.hero {
  position: relative;
  height: 100%;
}
.hero_man {
  width: 50%;
  height: 50%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-73%, -18%);
}
/* .hero_text {
  width: 90%;
  line-height: 2;
} */
.hero_topic {
  line-height: 1.2;
  width: 70%;
  text-align: center;
  margin: 0 auto;
}
.enrol,
.hero_topic,
.hero_text {
  position: relative;
}
.what_you_learn {
  margin: 5% 0;
  padding: 0 8%;
}
.grid_cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  /* grid-auto-rows: 330px; */
}
.card {
  border-radius: 10px;
}
.third {
  clip-path: polygon(0% 0%, 100.1% 0%, 100% 100%, 0% 80%);
  padding: 5% 0 17% 0;
  /* height: 100vh; */
}
.learn_course {
  line-height: 1.4;
}
.third_container {
  padding: 0 0 0 8%;
}
.third_image {
  height: 100%;
  border-radius: 44%;
  width: 50%;
  background-image: url("/Images/Learn/learn_smiling_guy.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video_container {
  height: 80vh;
  padding: 5% 0 5% 0;
}
.video {
  background-image: url("/Images/Learn/learn_video.png");
  height: 100%;
  width: 70%;
  margin: 0 auto;
  background-size: contain;
}

.instructors {
  padding: 0 8%;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
}
.instructors_cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  /* grid-auto-rows: 330px; */
}
.instructor_image {
  border-radius: 10px;
}

.overview {
  padding: 0 10%;
  line-height: 1.5;
}
@media screen and (max-width: 820px) {
  .headings {
    font-size: 2.2rem !important;
  }
}

@media screen and (max-width: 450px) {
  .headings {
    font-size: 1.8rem !important;
  }
}

@media screen and (max-width: 620px) {
  .hero_topic {
    width: 90%;
  }
}
</style>
