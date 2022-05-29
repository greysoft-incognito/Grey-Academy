<template>
    <div class="row full-height">
      <div class="col-5 image relative-position">
        <q-img src="/Images/payment_guy.png" class="absolute-bottom" />
      </div>
      <div class="col-7 q-px-md">
        <!-- Close Button  -->
        <q-card-section class="row items-center ">
          <q-space />
          <q-btn icon="close" class="bg-white" text-color="primary" round dense v-close-popup />
        </q-card-section>

        <div class="row">
          <q-space/>
          <div class="q-px-md text-caption q-py-sm percentage small_font">Enjoy up to 30% Scholarship. Limited slots available</div>
        </div>
        <div class="text-bold text-h5 ">Welcome!</div>
        <div class="text-primary text-subtitle2 q-my-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis feugiat facilisi feugiat sed pulvinar eleifend nisi, accumsan. Lobortis duis tincidunt ante ipsum curabitur amet nunc cursus tortor.</div>

        <div class="text-h5 text-primary">Select how you want to pay</div>
        <div class="row q-my-lg">
          <q-btn label="Full Payment" @click="fullPayment = true"  flat text-color="white" class="bg-primary" size="1.1rem"   no-caps />
          <q-btn label="Part Payment" @click="partPayment = true" color="primary" class="q-ml-lg" size="1.1rem"  outline no-caps />
        </div>
        <div class="text-primary text-caption small_font">*By clicking the payment button, it means you accept the Refund Policy <br>You will be redirected to payment page after selection</div>
      </div>
    </div>

    <q-dialog v-model="fullPayment" class="bg-black">
      <q-card style="max-width:60vw; width:100%;" class="full-height">
        <FullPayment />
      </q-card>
    </q-dialog>

    <q-dialog v-model="partPayment" class="bg-black">
      <q-card style="max-width:60vw; width:100%;" class="full-height">
        <PartPayment />
      </q-card>
    </q-dialog>

</template>

<script>
import { ref } from "vue"
import FullPayment from 'components/Payment/FullPayment.vue'
import PartPayment from 'components/Payment/PartPayment.vue'

export default {
  name: "payment",
  components:{
    FullPayment,
    PartPayment
  },
  data(){
    return{
      fullPayment: ref(false),
      partPayment: ref(false)
    }
  }
}
</script>

<style scoped>
  .image{
    background: #BA8572;
    /* height: 100%; */
  }
  .percentage{
    background: #FEEEEE;
    border-radius: 10px;
  }
  .small_font{
    font-size: 0.6rem;
  }
</style>
