<template>
  <Hero />
  <WhatToGet />
  <OurCourses />
  <VideoSection />
  <SuccessStories />
  <Appointment />
  <Community />
</template>

<script>
import { defineComponent } from "vue";
import Hero from "src/components/Homepage/Hero.vue";
import WhatToGet from "../components/Homepage/WhatToGet.vue";
import OurCourses from "../components/Homepage/OurCourses.vue";
import VideoSection from "../components/Homepage/VideoSection.vue";
import SuccessStories from "../components/Homepage/SuccessStories.vue";
import Community from "../components/Homepage/Community.vue";
import Appointment from "src/components/Homepage/Appointment.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    Hero,
    WhatToGet,
    OurCourses,
    VideoSection,
    SuccessStories,
    Community,
    Appointment,
  },
});
</script>

<style>
.hero {
  /* height: 90vh; */
  margin: 0 0 4%;
  /* padding-right: 8%; */
}
.hero_image {
  /* height: 100%; */
  /* padding-right: 8%; */
  width: 50%;
}
.hero_text {
  padding: 5% 0 5% 8%;
  /* margin: auto 0; */
  width: 50%;
}
.h_one {
  font-size: 4rem;
  line-height: 1.1;
}
.image {
  cursor: pointer;
  width: 10%;
  height: 100%;
}
@media screen and (max-width: 957px) {
  .hero_text {
    padding: 5% 0 5% 5%;
  }
}
@media screen and (max-width: 966px) {
  .h_one {
    font-size: 3rem;
  }
}

@media screen and (max-width: 840px) {
  .hero_image {
    /* height: 100%; */
  }
  .h_one {
    font-size: 2.6rem;
  }
  .mission_text {
    font-size: 1.05rem;
  }
  .explore_button {
    font-size: 1rem !important;
  }
  .watch_text {
    font-size: 0.9rem !important;
  }
}

@media screen and (max-width: 771px) {
  .image {
    width: 20%;
  }
  .hero_image,
  .hero_text {
    width: 70%;
    margin: 0 auto;
  }
  .hero_text {
    text-align: center;
    /* padding: 0 25%; */
  }
  .testimony_image {
    top: 91%;
    left: 45%;
    transform: translate(-50%, -50%);
  }

  .h_one {
    font-size: 3.5rem !important;
  }
  .mission_text {
    font-size: 1.5rem !important;
  }
  .watch_text {
    /* text-align: left !important; */
    font-size: 0.75rem !important;
  }
  .explore_button {
  }
}

@media screen and (max-width: 550px) {
  .testimony_image {
    top: 93%;
    left: 45%;
    transform: translate(-50%, -50%);
  }
  .testimonies div {
    font-size: 0.65rem !important;
    line-height: 1.05;
  }
  .image {
    width: 22%;
  }
  .hero_image,
  .hero_text {
    width: 80%;
    margin: 0 auto;
  }
  .h_one {
    font-size: 2.4rem !important;
  }
  .mission_text {
    font-size: 1.1rem !important;
  }
}
@media screen and (max-width: 400px) {
  .hero_image,
  .hero_text {
    width: 85%;
    margin: 0 auto;
  }
}
.sponsors {
  width: 100%;
}
.general_padding {
  padding: 0 8%;
}
.grid_cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.grid_sponsors {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  gap: 15px;
}
.video {
  height: 80vh;
  background-image: url("/Images/Homepage/greenbackground.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.video_content {
  height: 70vh;
  width: 100%;
  background-image: url("/Images/Homepage/video.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.course_cards {
  /* grid-auto-rows: auto; */
}
.course {
  padding: 0 0 5%;
  border-radius: 10px;
  cursor: pointer;
}
.course_text {
  display: none;
}
.course_text1,
.course_text2,
.course_text3,
.course_text4 {
  display: none;
}
.course1:hover .course_text1,
.course2:hover .course_text2,
.course3:hover .course_text3,
.course4:hover .course_text4 {
  display: block;
  box-shadow: 2px 10px 22px -7px rgba(0, 0, 0, 0.39);
  padding: 0 4% 7%;
  border-radius: 0 0 10px 10px;
  animation: ease-in 2s linear infinite;
  transition: 0.5s ease-in-out;
}

.course1:hover .course_image1,
.course2:hover .course_image2,
.course3:hover .course_image3,
.course4:hover .course_image4 {
  border-radius: 10px 10px 0 0 !important;
}

.course1:hover .course_name1,
.course2:hover .course_name2,
.course3:hover .course_name3,
.course4:hover .course_name4 {
  display: none;
}
.course_image {
  border-radius: 10px;
}
/* .course_text{
    display: none;
  } */
.course a {
  color: rgb(0, 113, 68);
  text-decoration: none;
}
.fourth {
  padding-bottom: 4%;
}
.second_image {
  filter: grayscale(100%) !important;
}

@media screen and (max-width: 1001px) {
  .grid_cards,
  .course_cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    grid-auto-rows: auto;
  }
}

@media screen and (max-width: 600px) {
  .grid_sponsors {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .video {
    height: 50vh;
  }
  .video_content {
    height: 90%;
  }
}

@media screen and (max-width: 601px) {
  .grid_cards,
  .course_cards {
    display: grid;
    grid-template-columns: repeat(1, 65%);
    place-items: center;
    justify-content: center;
    gap: 20px;
  }
  .small_heading {
    font-size: 1.7rem !important;
    padding: 0 5% !important;
  }
  .success_sub {
    font-size: 0.9rem !important;
    padding: 0 10% !important;
  }
}

@media screen and (max-width: 440px) {
  .grid_cards {
    grid-template-columns: repeat(1, 85%);
  }
  .course_cards {
    grid-template-columns: repeat(1, 95%);
  }
}

@media screen and (max-width: 771px) {
  .course_text1,
  .course_text2,
  .course_text3,
  .course_text4 {
    display: block;
    box-shadow: 2px 10px 22px -7px rgba(0, 0, 0, 0.39);
    padding: 0 4% 7%;
    border-radius: 0 0 10px 10px;
  }
  .course_name1,
  .course_name2,
  .course_name3,
  .course_name4 {
    display: none;
  }
  .course_image1,
  .course_image2,
  .course_image3,
  .course_image4 {
    border-radius: 10px 10px 0 0 !important;
  }
}
</style>
