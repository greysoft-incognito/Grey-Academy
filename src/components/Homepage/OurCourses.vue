<template>
  <!-- Third Section  -->
  <div class="general_padding q-mt-xl q-mb-sm fourth">
    <div
      class="text-h4 text-primary text-bold text-center q-mb-xl small_heading"
    >
      Our Courses
    </div>
    <div class="cards course_cards">
      <div class="course course1 q-pa-none">
        <div class="course_image relative-position">
          <q-img
            loading="eager"
            :src="programming.image"
            class="course_image course_image1"
            height="100%"
            width="100%"
          />
          <div
            class="course_name1 text-bold absolute-bottom text-white text-center q-mb-sm"
          >
            {{ programming.title }}
          </div>
        </div>
        <div class="q-px-md course_text1">
          <div class="q-my-xs text-primary text-subtitle1">Tech</div>
          <div class="text-primary text-bold text-subtitle1">
            {{ programming.title }}
          </div>
          <div :class="`q-my-sm  ${width <= 770 ? 'ellipsis-3-lines' : ''}`">
            {{ programming.overview }}
          </div>
          <router-link
            :to="`/learn/programming/${programming.id}`"
            class="q-my-md"
            >Learn more...</router-link
          >
          <div>
            <q-btn
              no-caps
              label="Register"
              @click="course_please(programming.title), (register = true)"
              flat
              text-color="white"
              class="bg-primary self-end q-mt-sm"
            />
          </div>
        </div>
      </div>

      <div class="course course2 q-pa-none">
        <div class="course_image relative-position">
          <q-img
            loading="eager"
            :src="Creative.image"
            class="course_image course_image2"
            height="100%"
            width="100%"
          />
          <div
            class="course_name2 text-bold absolute-bottom text-white text-center q-mb-sm"
          >
            {{ Creative.title }}
          </div>
        </div>
        <div class="q-px-md course_text2">
          <div class="q-my-xs text-primary text-subtitle1">Creative</div>
          <div class="text-primary text-bold text-subtitle1">
            {{ Creative.title }}
          </div>
          <div :class="`q-my-sm  ${width <= 770 ? 'ellipsis-3-lines' : ''}`">
            {{ Creative.overview }}
          </div>
          <router-link :to="`/learn/creative/${Creative.id}`" class="q-my-md"
            >Learn more...</router-link
          >
          <div>
            <q-btn
              no-caps
              label="Register"
              @click="course_please(Creative.title), (register = true)"
              flat
              text-color="white"
              class="bg-primary self-end q-mt-sm"
            />
          </div>
        </div>
      </div>

      <div class="course course3 q-pa-none">
        <div class="course_image relative-position">
          <q-img
            loading="eager"
            :src="design.image"
            class="course_image course_image3"
            height="100%"
            width="100%"
          />
          <div
            class="course_name3 text-bold absolute-bottom text-white text-center q-mb-sm"
          >
            {{ design.title }}
          </div>
        </div>
        <div class="q-px-md course_text3">
          <div class="q-my-xs text-primary text-subtitle1">Design</div>
          <div class="text-primary text-bold text-subtitle1">
            {{ design.title }}
          </div>
          <div :class="`q-my-sm  ${width <= 770 ? 'ellipsis-3-lines' : ''}`">
            {{ design.overview }}
          </div>
          <router-link :to="`/learn/design/${design.id}`" class="q-my-md"
            >Learn more...</router-link
          >
          <div>
            <q-btn
              no-caps
              label="Register"
              @click="course_please(design.title), (register = true)"
              flat
              text-color="white"
              class="bg-primary self-end q-mt-sm"
            />
          </div>
        </div>
      </div>

      <div class="course course4 q-pa-none">
        <div class="course_image relative-position">
          <q-img
            loading="eager"
            :src="business.image"
            class="course_image course_image4"
            height="100%"
            width="100%"
          />
          <div
            class="course_name4 text-bold absolute-bottom text-white text-center q-mb-sm"
          >
            {{ business.title }}
          </div>
        </div>
        <div class="q-px-md course_text4">
          <div class="q-my-xs text-primary text-subtitle1">Business</div>
          <div class="text-primary text-bold text-subtitle1">
            {{ business.title }}
          </div>
          <div :class="`q-my-sm  ${width <= 770 ? 'ellipsis-3-lines' : ''}`">
            {{ business.overview }}
          </div>
          <router-link :to="`/learn/business/${business.id}`" class="q-my-md"
            >Learn more...</router-link
          >
          <div>
            <q-btn
              no-caps
              label="Register"
              @click="course_please(business.title), (register = true)"
              flat
              text-color="white"
              class="bg-primary self-end q-mt-sm"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row q-my-md">
      <q-space />
      <q-btn
        label="See all courses"
        size="1.2rem"
        text-color="white"
        @click="schools = true"
        flat
        no-caps
        class="bg-primary button"
      />
      <q-space />
    </div>
  </div>

  <q-dialog v-model="schools" class="">
    <q-card style="max-width: 50vw; width: 100%; height: 70vh" class="school">
      <Schools />
    </q-card>
  </q-dialog>
  <q-dialog v-model="register" class="">
    <q-card style="max-width: 50vw; width: 100%; height: 70vh" class="modal">
      <RegisterCourse :coursed="this.courseName" />
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import programming from "src/boot/Data/Courses/programming";
import business from "src/boot/Data/Courses/business";
import design from "src/boot/Data/Courses/design";
import Creative from "src/boot/Data/Courses/Creative";
import Schools from "../Schools.vue";
import RegisterCourse from "src/components/Homepage/RegisterCourse.vue";

export default {
  components: {
    Schools,
    RegisterCourse,
  },
  data() {
    return {
      programming,
      business,
      design,
      Creative,
      schools: ref(false),
      register: ref(false),
      width: window.innerWidth,
    };
  },
  methods: {
    course_please(a) {
      // a.splice('Become a')
      this.courseName = a;
      console.log(this.courseName);
    },
    setToLocal(singleCourse) {
      console.log(singleCourse);
      localStorage.setItem("course", JSON.stringify(singleCourse));
    },
  },
  mounted() {
    // console.log(this.programming[3]);
    // console.log(this.business[1]);
    // console.log(this.design[0]);
    // console.log(this.Creative[2]);
    console.log(this.width);
    this.programming = this.programming[3];
    this.business = this.business[1];
    this.design = this.design[0];
    this.Creative = this.Creative[3];
  },
};
</script>

<style scoped>
@media screen and (max-width: 771px) {
  .school {
    max-width: 70vw !important;
    width: 100% !important;
    max-height: 70vh !important;
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
