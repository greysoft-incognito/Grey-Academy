<template>
  <div class="hero text-white">
    <div class="hero_text q-my-auto">
      <div class="text-h3 text-bold q-my-lg welcome_text">
        Welcome to Programming School
      </div>
      <div class="text-justify text-subtitle1 more_text">
        Go from zero knowledge to being able to build your own complete website!
        Starting with the foundations of software engineering. By the end of
        this program you would have mastered a specialization and learn the art
        of effective collaboration to solve real world problems.
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
      v-for="course in $loaded.programming"
      :key="course.id"
    >
      <q-img
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
              :to="`/learn/programming/${course.id}`"
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
          @click="course_please(course.title), (register = true)"
          size="1.05rem"
          flat
          text-color="white"
          class="bg-primary self-end register"
        />
      </div>
    </div>

    <q-dialog v-model="register" class="">
      <q-card style="max-width: 50vw; width: 100%; height: 70vh" class="modal">
        <RegisterCourse :coursed="this.courseName" />
      </q-card>
    </q-dialog>

    <div class="text-bold text-h4 text-center q-my-xl">
      BlockChain Development
    </div>

    <div
      class="course row justify-center q-mt-xl"
      v-for="contract in smartContract"
      :key="contract.id"
    >
      <q-img
        :src="contract.image"
        class="col-lg-3 col-md-5 col-sm-5 bg_props course_image"
      />
      <div class="q-my-md col-lg-7 col-md-7 col-sm-7 course_div">
        <div class="">
          <div class="row q-gutter-x-xs no-wrap">
            <q-btn
              label="Early Starter"
              text-color="primary"
              class="early_starter"
              @click="
                setToLocal(contract),
                  this.$router.push(`/learn/${contract.title}`)
              "
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
          <div class="q-my-lg text-h6 text-bold">{{ contract.title }}</div>
          <div class="q-my-lg text-subtitle1 subtitle">
            {{ contract.description }}
          </div>
          <div class="row justify-between q-my-md">
            <div class="q-mb-lg row items-center text-bold q-my-auto price">
              <q-icon name="access_time" class="q-mr-sm" />
              <span>{{ contract.time }} Months</span>
            </div>
            <q-btn
              :label="`NGN ${contract.price}`"
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
          @click="course_please(contract.title), (register = true)"
          size="1.05rem"
          flat
          text-color="white"
          class="bg-primary self-end register"
        />
      </div>
    </div>
  </div>

  <SuccessStories />

  <!-- <div class="text-center q-my-xl q-py-md">
    <div class="text-h4 text-bold">Success Stories</div>
    <div class="text-subtitle1">
      What our students are saying about their learning experience
    </div>
    <div class="grid_stories">
      <q-img src="/Images/Programming/1.png" class="right" />
      <q-img src="/Images/Programming/2.png" class="top" />
      <q-img src="/Images/Programming/3.png" class="right" />
    </div>
  </div> -->
</template>

<script>
import { ref } from "vue";
import programming from "src/boot/Data/Courses/programming";
import smartContract from "src/boot/Data/Courses/smartContract";
import RegisterCourse from "src/components/Homepage/RegisterCourse.vue";
import SuccessStories from "src/components/Homepage/SuccessStories.vue";

export default {
  name: "Programming",
  data() {
    return {
      programming,
      smartContract,
      register: ref(false),
      courseName: "",
    };
  },
  components: { RegisterCourse, SuccessStories },
  methods: {
    course_please(a) {
      this.courseName = a;
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
  background-image: url("/Images/Programming/programming.png");
  background-color: rgb(77, 0, 1, 0.9);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.hero_text {
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
  .welcome_text {
    font-size: 2.2rem;
  }
  .hero_text {
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
  .success_sub {
    font-size: 0.9rem !important;
    padding: 0 10% !important;
  }
  .small_heading {
    font-size: 1.7rem !important;
    padding: 0 5% !important;
  }
}

@media screen and (max-width: 501px) {
  .welcome_text {
    font-size: 1.9rem;
  }
  .more_text {
    font-size: 0.95rem;
  }
  .hero_text {
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
