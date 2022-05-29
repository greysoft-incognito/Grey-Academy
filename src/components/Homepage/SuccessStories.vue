<template>
  <div class="text-center q-my-xl q-py-md">
    <div class="text-h4 text-bold text-primary small_heading reveal">
      Success Stories
    </div>
    <div class="text-h4 text-bold text-primary small_heading hide">
      Success Story
    </div>
    <!-- <div class="text-subtitle1 success_sub">
      What our students are saying about their learning experience
    </div> -->
    <!-- <div class="grid_stories">
      <q-img src="/Images/Programming/1.png" class="right story1" />
      <q-img src="/Images/Programming/2.png" class="top story" />
      <q-img src="/Images/Programming/3.png" class="right story" />
    </div> -->
    <div class="row hover_container">
      <q-img src="/Images/Programming/1.png" class="story hover_image" />
      <div class="text-left text-div q-ml-lg q-mt-lg">
        <div class="text-bold text-h6">Julius Jonathan</div>
        <div class="q-my-sm text-bold">UI/UX fellow</div>
        <div class="text-subtitle1">
          Hello I am Julius, I really didn't know much about design not to talk
          of design tools, but I wanted to be a product designer. I decided to
          register for a UI/UX design course on Grey-Academy, the journey
          learning the course was smooth and right now I am a certified product
          designer working with a company already.
        </div>
      </div>
    </div>

    <div class="row hover_container second">
      <q-img src="/Images/Design/design1.png" class="story hover_image" />
      <div class="text-left text-div q-ml-lg q-mt-lg">
        <div class="text-bold text-h6">Kate John</div>
        <div class="q-my-sm text-bold">Data fellow</div>
        <div class="text-subtitle1">
          My name is Kate, making the decision to learn data analysis with
          Grey-Academy was the best decision ever, the learning process was
          engaging and impactful, and right now I am a proud certified data
          analyst with few finished projects and counting.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hide {
  display: none;
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
.story1 {
  cursor: pointer;
  z-index: 1;
}
.contain {
  padding: 0 20%;
  margin: 7% 0 3%;
}
.story1:hover {
  border: 1px solid red;
}
.story1:hover .contain {
  /* opacity: 1; */
}
.hover_image {
  width: 150px;
  height: 150px;
  margin: 5% 0;
  border-radius: 50%;
}
.hover_container {
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 2% auto;
}
.text-div {
  width: 70%;
}

@media screen and (max-width: 1160px) {
  .hover_container {
    width: 70%;
  }
}

@media screen and (max-width: 895px) {
  .hover_container {
    width: 85%;
  }
}

@media screen and (max-width: 687px) {
  .hover_container {
    width: 100%;
  }
  .hover_image {
    width: 120px;
    height: 120px;
    margin: -10% 0 0;
    border-radius: 50%;
  }
}
@media screen and (max-width: 900px) {
  .hover_container {
    padding-right: 5%;
  }
}
@media screen and (max-width: 800px) {
  .grid_stories {
    width: 80%;
    margin: 2% auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: 150px;
  }
  .hover_container {
    padding: 0 5% 0 10%;
  }
  .hover_image {
    width: 120px;
    height: 120px;
  }
}

@media screen and (max-width: 601px) {
  .hover_image {
    width: 100px;
    height: 100px;
  }
  .success_sub {
    font-size: 0.9rem !important;
    padding: 0 10% !important;
  }
  .small_heading {
    font-size: 1.7rem !important;
    padding: 0 5% !important;
  }
  .second {
    display: none;
  }
  .hover_container {
    justify-content: space-around;
  }
  .text-div {
    font-size: 0.8rem;
  }
  .hide {
    display: block;
  }
  .reveal {
    display: none;
  }
}

@media screen and (max-width: 450px) {
  .hover_container {
    /* display: block; */
  }
  .grid_stories {
    grid-auto-rows: 120px;
  }
  .hover_image {
    width: 120px;
    height: 120px;
  }
  .text_div {
    /* text-align: center; */
    width: 100%;
  }
}

@media screen and (max-width: 487px) {
  .hover_container {
    display: block;
    padding: 0;
    margin: 15% 0 0;
  }
  .second {
    display: none;
  }
  .text-div {
    width: 100%;
    margin: 0 auto;
    padding: 2% 10%;
  }
  .hover_image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
}
</style>
