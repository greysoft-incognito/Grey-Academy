<template>
  <div class="hero row">
    <div class="col-7 hero_text">
      <div class="text-h2 text-bold text-primary q-my-xl">We are loved by our students</div>
      <div class="text-h6 q-my-xl">The little stories you tell about your experience with us is important to us. This is  why we are intentional about knowing your  success story.</div>
      <div class="row">
        <q-btn label="Write your story" size="1.3rem" no-caps icon-right="fa-solid fa-feather" text-color="white" class="bg-primary" />
        <q-space/>
      </div>
    </div>
    <div class="col-5 hero_image"></div>
  </div>


  <!-- Stories section  -->
  <div class="grid_cards">
    <div class="row card" v-for="n in 14" :key="n">
      <div class="col-4 profile_image bg_props"></div>
      <div class="col-8 q-pa-md">
        <div class="text-bold text-h6 text-primary">Paul Oghenekevwe</div>
        <div class="text-primary q-mb-md text-caption"> <span>System Analyst</span> | <span>Coca-cola</span> </div>
        <div>Enrolling at GreyAcademy has been awesome for me. I must commend the expertise of the trainers and patience.....</div>
      </div>
    </div>

  </div>


</template>

<script>
export default {

}
</script>

<style scoped>
  .hero{
    background: rgb(162, 4, 23,0.04);
    height: 70vh;
  }
  .hero_image{
    height: 100%;
    background-image: url('/Images/Ourstory/human.png');
    background-position: center ;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .hero_text{
    padding: 0 0 0 8% ;
  }
  .grid_cards{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
    place-items: center;
    /* grid-auto-rows: 180px; */
    padding: 5% 10%;
  }
  .card{
    background: rgb(162, 4, 23,0.04);
    border-radius: 10px;
    margin: 1% 0;
    width: 80%;
  }
  .bg_props{
    background-position: center ;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px 0 0 10px;
  }
  .profile_image{
    background-image: url('/Images/Homepage/video.png');
  }

</style>
