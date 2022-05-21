<template>
  <div class="hero row">
    <div class="col-6 hero_text flex content-between">
      <div>
        <div class="h_one text-bold ">Trainings That will level up your team</div>
        <div class="text-h6 text-weight-light q-my-xl more_text">Tap Into our Pool of  Talent From Silicon Valley to Fuel Your Digital Transformation and Drive Amazing Growth.</div>
      </div>
      <div class="row items-center">
        <q-btn label="Schedule a call" to="/booking" size="1rem" no-caps icon-right="chevron_right" text-color="white" class="bg-primary" />
        <div class="text-primary text-subtitle1 q-ml-md q-mt-sm download_text" @click="companies = true" >Or Download Brochure</div>
        <q-space/>
      </div>
    </div>
    <q-img src="/Images/Footer/frame66.png" class="col-6" />
  </div>

  <q-dialog v-model="companies" class="">
    <q-card style="max-width:50vw; width:100%;" class="full-height company">
      <CorporateTraining />
    </q-card>
  </q-dialog>


  <!-- What we Do  -->
    <div class="q-my-xl">
      <div class="text-center text-h4 text-bold text-primary q-my-xl">What We Do</div>

      <div class="grid_cards what_grid">
        <q-card class="text-center q-pa-md">
          <q-icon name="fa-solid fa-person-chalkboard" size="3.5rem" />
          <div class="text-bold text-primary text-h5 q-mt-md">Onboard</div>
          <div class="text-primary text-subtitle1 q-my-lg">Prepare and set up for success. Empower your new hires to make a positive impact, and grow into leaders.</div>
        </q-card>
        <q-card class="text-center q-pa-md">
          <q-icon name="add" size="3.5rem" />
          <div class="text-bold text-primary text-h5 q-mt-md">Reskill</div>
          <div class="text-primary text-subtitle1 q-my-lg">Train your talents to be equipped with relevant skills and practices.</div>
        </q-card>
        <q-card class="text-center q-pa-md">
          <q-icon name="fa-solid fa-people-group" size="3.5rem" />
          <div class="text-bold text-primary text-h5 q-mt-md">Align</div>
          <div class="text-primary text-subtitle1 q-my-lg">Create uniformity and greater cohesion to unlock barriers</div>
        </q-card>
      </div>
    </div>




    <div class="middle_section bg_props">
      <div class="row middle_section_child">
        <div class="col-lg-5 col-md-5 col-sm-4 col-xs-4 middle_section_img bg_props"></div>
        <div class="col-lg-7 middle_section_text col-md-7 col-sm-8 col-xs-8 flex flex-center">
          <div class="text-white text-h5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales sit cras non gravida egestas arcu eleifend. Ultrices viverra vitae mattis nulla purus tincidunt nunc. Turpis nullam varius enim commodo. Turpis eleifend viverra ut dignissim. Ultrices facilisis morbi leo dictumst nibh gravida. Accumsan a etiam velit dui placerat </div>
          <div class="text-white text-h5">Lorem ipsum dolor sit amet consectetur adipiscing elit. s morbi leo dictumst nibh gravida. Accumsan a </div>
        </div>
      </div>
    </div>


    <div class="q-my-xl">
      <div class="text-h4 text-center text-primary text-bold q-my-xl">Meet Our Instructors</div>
      <div class="grid_cards instructors q-my-md">
        <q-card class="text-center q-py-md">
          <q-avatar size="8rem" class="q-my-md">
            <q-img src="/Images/Training/inst7.png" />
          </q-avatar>
          <div class="text-h6">John Smith</div>
          <div class="text-subtitle1">Product Manager</div>
        </q-card>

        <q-card class="text-center q-py-md">
          <q-avatar size="8rem" class="q-my-md">
            <q-img src="/Images/Training/inst2.png" />
          </q-avatar>
          <div class="text-h6">John Smith</div>
          <div class="text-subtitle1">Product Manager</div>
        </q-card>

        <q-card class="text-center q-py-md">
          <q-avatar size="8rem" class="q-my-md">
            <q-img src="/Images/Training/inst3.png" />
          </q-avatar>
          <div class="text-h6">John Smith</div>
          <div class="text-subtitle1">Product Manager</div>
        </q-card>

        <q-card class="text-center q-py-md">
          <q-avatar size="8rem" class="q-my-md">
            <q-img src="/Images/Training/inst4.png" />
          </q-avatar>
          <div class="text-h6">John Smith</div>
          <div class="text-subtitle1">Product Manager</div>
        </q-card>

        <q-card class="text-center q-py-md">
          <q-avatar size="8rem" class="q-my-md">
            <q-img src="/Images/Training/inst5.png" />
          </q-avatar>
          <div class="text-h6">John Smith</div>
          <div class="text-subtitle1">Product Manager</div>
        </q-card>

        <q-card class="text-center q-py-md">
          <q-avatar size="8rem" class="q-my-md">
            <q-img src="/Images/Training/inst6.png" />
          </q-avatar>
          <div class="text-h6">John Smith</div>
          <div class="text-subtitle1">Product Manager</div>
        </q-card>
      </div>
      <div class="row q-mt-lg" style="padding: 0 12%">
        <q-space/>
        <q-btn label="See More" no-caps flat color="white" size="1.1rem" class="bg-primary" />
      </div>
    </div>








</template>

<script>
import { ref } from 'vue'
import CorporateTraining from 'components/Training/CorporateTraining.vue'

export default {
  name: "Trainings",
  components: {
    CorporateTraining
  },
  data(){
    return{
      companies: ref(false)
    }
  }
}
</script>

<style scoped>
  .bg_props{
    background-position: center ;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .hero{
    /* background: rgb(162, 4, 23,0.04); */
    /* height: 80vh; */
    padding: 3% 8%;
  }
  .hero_image{
    height: 100%;
    background-image: url('/Images/Footer/frame66.png');
  }
  .hero_text{
    /* padding: 0 0 0 8% ; */
    padding-right: 5% ;
  }
  .h_one{
    font-size: 3rem;
    line-height: 1.2;
  }
  .download_text{
    text-decoration: underline;
    cursor: pointer;
  }
  .download_text:hover{
    color: green !important;
  }
  .grid_cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    /* grid-auto-rows: 300px; */
    padding: 0 8%;
  }
  .middle_section{
    /* height: 60vh; */
    background-image: url('/Images/Training/africa.png');
  }
  .instructors{
    gap: 50px;
    /* grid-auto-rows: 400px; */
  }
  .middle_section_img{
    background-image: url('/Images/Training/inst1.png');
  }
  .middle_section_child{
    height: 100%;
    padding: 0 5%;
  }
  .middle_section_text{
    padding: 5% 3%;
  }

  .company{
    white-space: nowrap;
    /* position: relative; */
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; /* hiding the scrollbar for Internet Explorer, Edge */
    scrollbar-width: none; /* hiding the scrollbar for Firefox */
  }

  @media screen and (max-width:917px) {
    .h_one{
      font-size: 2.5rem;
    }
    .more_text{
      font-size: 1rem !important;
    }
  }

  @media screen and (max-width:700px) {
    .instructors{
      gap: 10px;
    }
    .what_grid{
      grid-template-columns: repeat(1, 70%);
      gap: 20px;
      justify-content: center;
      /* grid-auto-rows: 300px; */
      padding: 0 8%;
    }
  }

  @media screen and (max-width:600px) {
    .instructors{
       display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      padding: 0 8%;
    }
  }

  @media screen and (max-width:450px) {
    .what_grid{
      grid-template-columns: repeat(1, 85%);
    }
  }

</style>
