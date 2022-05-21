<template>
  <div class="text-center q-my-xl q-py-md">
    <div class="text-h4 text-bold text-primary small_heading story1">
      Success Stories
    </div>
    <div class="text-subtitle1 success_sub">
      What our students are saying about their learning experience
    </div>
    <div class="grid_stories">
      <q-img src="/Images/Programming/1.png" class="right story1" />
      <q-img src="/Images/Programming/2.png" class="top story" />
      <q-img src="/Images/Programming/3.png" class="right story" />
    </div>
    <!-- <div class="row container">
      <q-img src="/Images/Programming/1.png" class="story hover_image" />
      <div class="col-8 text-left q-ml-lg q-mt-lg">
        <div class="text-bold">Lorem name</div>
        <div class="q-my-md">Lorem fellow</div>
        <div>
          I was looking for something a little more than a training, a school I
          could count on for my continuous skill and professional development.
          GreyAcademy kept coming up so I jumped in. I went through the Data
          Accelerator program and then the ‘Big Data with Python’ program. I am
          now a Data Scientist and Consultant.
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
.story1:hover + .container {
  display: block;
  /* visibility: visible; */
}
.container {
  padding: 0 20%;
  margin: 7% 0 3%;
  display: none;
  /* visibility: hidden; */
}
.hover_image {
  width: 150px;
  height: 150px;
  margin: 5% 0;
  border-radius: 50%;
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
}

@media screen and (max-width: 450px) {
  .grid_stories {
    grid-auto-rows: 120px;
  }
  .hover_image {
    width: 70px;
    height: 70px;
  }
}
</style>
