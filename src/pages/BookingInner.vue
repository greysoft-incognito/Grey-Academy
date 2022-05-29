<template>
  <Hero />

  <div class="row justify-between text-primary q-my-lg general_padding">
    <q-btn color="primary" icon="chevron_left" outline no-caps to="/booking"  label="Choose a different time"/>

    <div class="text-bold text-h5">Confirm Booking</div>

    <div class="row">
      <q-icon name="chevron_left" size="2.5rem" v-ripple="true" class="cursor-pointer q-mx-xs " />
      <q-icon name="chevron_right" size="2.5rem" v-ripple="true" class="cursor-pointer q-mx-xs " />
    </div>
  </div>


  <div class="bg-secondary">
    <div class="row date">
      <div class="col-2 bg-white text-primary q-pa-md">
        <div>Friday, May 6, 2022</div>
        <div class="text-bold">5:00 PM - 5:30PM</div>
        <div>Africa/Lagos</div>
      </div>
    </div>

    <div class="form">
      <div class="q-mb-md">
        <label for="" class="text-primary"> <span class="text-bold text-subtitle1">First Name:</span> <span>(Required)</span></label>
        <q-input outlined color="primary"  />
      </div>
      <div class="q-mb-md">
        <label for="" class="text-primary"> <span class="text-bold text-subtitle1">Last Name:</span> <span>(Required)</span></label>
        <q-input outlined color="primary"  />
      </div>
      <div class="q-mb-md">
        <label for="" class="text-primary"> <span class="text-bold text-subtitle1">Email:</span> <span>(Required)</span></label>
        <q-input outlined color="primary"  />
      </div>
      <div class="q-mb-md">
        <label for="" class="text-primary"> <span class="text-bold text-subtitle1">Phone Number:</span> <span>(Required)</span></label>
        <q-input outlined color="primary" >
          <template v-slot:prepend>
            <q-btn-dropdown color="" text-color="primary" flat icon="fa-solid fa-flag-usa" label="">
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
          </template>
        </q-input>
      </div>

      <div class="row">
        <q-space/>
        <q-btn label="Confirm Booking" size="1.15rem" style="width:35%" text-color="white" flat no-caps class="bg-primary q-mt-lg button" />
        <q-space/>
      </div>
    </div>
  </div>

  <ContactUs />

</template>

<script>
import Hero from 'components/Booking/Hero.vue'
import ContactUs from 'components/Booking/ContactUs.vue'

export default {
  name: 'BookingInner',
  components:{
    Hero,
    ContactUs
  },
  data(){
    return{

    }
  }
}
</script>

<style>
  .hero{
    padding: 0 15%;
  }
  .line{
    background: rgb(77, 0, 1,0.5);
  }
  .general_padding{
    padding:  0 10%;
  }
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
