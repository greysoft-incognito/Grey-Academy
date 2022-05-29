<template>

  <Hero />

  <div class="row justify-between text-primary q-my-lg general_padding">
    <q-btn-dropdown color="primary" icon="fa-solid fa-globe" outline class="bg-" no-caps  label="Africa/Lagos">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>

    <div class="text-bold text-h6">May 2022</div>

    <div class="row">
      <q-icon name="chevron_left" size="2.5rem" v-ripple="true" class="cursor-pointer q-mx-xs " />
      <q-icon name="chevron_right" size="2.5rem" v-ripple="true" class="cursor-pointer q-mx-xs " />
    </div>
  </div>

  <div class="bg-secondary dates">
    <div class="bg-primary text-white q-py-xs q-px-lg q-mb-lg today">TODAY</div>

    <div class="row date_inner q-mb-lg q-py-sm">
      <div class="column col-1 text-primary text-center q-py-sm">
        <div>Fri</div>
        <div class="text-h4 text-bold">06</div>
      </div>
      <div class="row col-9 q-pa-md q-mx-lg grid_btn ">
        <q-btn label="5:00 PM" outline color="primary" to="/bookinginner" class="col-2 text-h6" />
        <q-btn label="8:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:30 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="9:30 PM" outline color="primary" class="col-2 text-h6" />
        <!-- <q-btn label="" outline color="primary" class="col-2" />
        <q-btn label="" outline color="primary" class="col-2" /> -->
      </div>
    </div>

    <div class="row date_inner q-mb-lg q-py-sm">
      <div class="column col-1 text-primary text-center q-py-sm">
        <div>Fri</div>
        <div class="text-h4 text-bold">07</div>
      </div>
      <div class="row col-9 q-pa-md q-mx-lg grid_btn ">
        <q-btn label="5:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:30 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="9:30 PM" outline color="primary" class="col-2 text-h6" />
        <!-- <q-btn label="" outline color="primary" class="col-2" />
        <q-btn label="" outline color="primary" class="col-2" /> -->
      </div>
    </div>

    <div class="row date_inner q-mb-lg q-py-sm">
      <div class="column col-1 text-primary text-center q-py-sm">
        <div>Fri</div>
        <div class="text-h4 text-bold">08</div>
      </div>
      <div class="row col-9 q-pa-md q-mx-lg grid_btn ">
        <q-btn label="5:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:30 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="9:30 PM" outline color="primary" class="col-2 text-h6" />
        <!-- <q-btn label="" outline color="primary" class="col-2" />
        <q-btn label="" outline color="primary" class="col-2" /> -->
      </div>
    </div>

    <div class="row date_inner q-mb-lg q-py-sm">
      <div class="column col-1 text-primary text-center q-py-sm">
        <div>Fri</div>
        <div class="text-h4 text-bold">09</div>
      </div>
      <div class="row col-9 q-pa-md q-mx-lg grid_btn ">
        <q-btn label="5:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:30 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="9:30 PM" outline color="primary" class="col-2 text-h6" />
        <!-- <q-btn label="" outline color="primary" class="col-2" />
        <q-btn label="" outline color="primary" class="col-2" /> -->
      </div>
    </div>

    <div class="row date_inner q-mb-lg q-py-sm">
      <div class="column col-1 text-primary text-center q-py-sm">
        <div>Fri</div>
        <div class="text-h4 text-bold">10</div>
      </div>
      <div class="row col-9 q-pa-md q-mx-lg grid_btn ">
        <q-btn label="5:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:30 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="9:30 PM" outline color="primary" class="col-2 text-h6" />
        <!-- <q-btn label="" outline color="primary" class="col-2" />
        <q-btn label="" outline color="primary" class="col-2" /> -->
      </div>
    </div>

    <div class="row date_inner q-mb-lg q-py-sm">
      <div class="column col-1 text-primary text-center q-py-sm">
        <div>Fri</div>
        <div class="text-h4 text-bold">11</div>
      </div>
      <div class="row col-9 q-pa-md q-mx-lg grid_btn ">
        <q-btn label="5:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:00 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="8:30 PM" outline color="primary" class="col-2 text-h6" />
        <q-btn label="9:30 PM" outline color="primary" class="col-2 text-h6" />
        <!-- <q-btn label="" outline color="primary" class="col-2" />
        <q-btn label="" outline color="primary" class="col-2" /> -->
      </div>
    </div>
  </div>


  <ContactUs />


</template>

<script>
import Hero from 'components/Booking/Hero.vue'
import ContactUs from 'components/Booking/ContactUs.vue'

export default {
  name: "Booking",
  components:{
    Hero,
    ContactUs
  },
  data(){

  }

}
</script>

<style>

  .today{
    display: inline-block;
    border-radius: 10%;
  }
  .dates{
    padding: 2% 12%;
  }
  .date_inner{
    width:100%;
    background: #F2F1F1;
  }
  .grid_btn{
    display: inline-flex;
    flex-wrap:nowrap ;
    gap: 12px;
  }
  .form{
    padding: 0 20% 10%;
  }
  .date{
    padding: 2% 12%;
  }
  .date div{
    border-radius: 10%;
  }
</style>
