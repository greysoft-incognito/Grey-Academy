<template>
    <div class="row full-height text-primary">
      <div class="col-4 q-pa-md image relative-position">
        <div class="text-primary text-h6 cursor-pointer" @click="this.$router.push('/')" >
        <div> <span class="grey_text text-bold">Grey</span> <span class="text-weight-regular">Academy</span> </div>
      </div>

      <div class=" text-bold text-caption frontend">Front-End Development- <span class="text-weight-light">FullPayment</span></div>
      <div class="text-h5 text-bold">NGN 50,000</div>

      <div class="middle_box"></div>

      </div>

      <div class="col-8 q-px-lg">
          <!-- Close Button  -->
          <q-card-section class="row items-center ">
            <q-space />
            <q-btn icon="close" class="bg-white" size="0.8rem" text-color="primary" round dense v-close-popup />
          </q-card-section>

          <div class="text-primary text-bold text-h6 q-my-md">Pay with Card</div>

          <div class="q-mb-md">
            <label for="" class="text-primary text-bold text-caption"> Email</label>
            <q-input dense outlined color="primary" bg-color=""  />
          </div>
            <label for="" class="text-primary text-caption text-bold">Card Information</label>
            <q-input dense outlined color="primary" square label="1234 1234 1234 1234" bg-color=""  />
            <div class="row q-mb-md">
              <q-input dense class="col-6" label="MM/YY" square outlined color="primary" bg-color=""  />
              <q-input dense class="col-6" label="CVV" square outlined color="primary" bg-color="" >
                <template v-slot:append>
                  <q-icon name="credit_card" />
                </template>
              </q-input>
            </div>
          <div>

          <div class="q-mb-md">
            <label for="" class="text-primary text-bold text-caption"> Name on Card</label>
            <q-input dense outlined color="primary" bg-color=""  />
          </div>

          <div class="q-mb-md">
            <label for="" class="text-primary text-bold text-caption"> Country/Region</label>
            <q-input dense outlined color="primary" bg-color="">
              <template v-slot:append>
                <q-btn-dropdown color="primary" label="" flat >
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

          <div class="tick_box row text-primary">
            <div class="q-gutter-sm">
              <q-checkbox
                v-model="customModel"
                color="primary"
                true-value="yes"
                false-value="no"
              />
            </div>
            <div class="q-ml-md">
              <div class="text-caption text-bold">Save my info for secure 1- click checkout</div>
              <div class="small_font">Pay faster on GreyAcademy and all other sites.</div>
            </div>
          </div>

          <div class="row">
            <q-space/>
            <q-btn label="Pay" no-caps style="width:60%" size="1.15rem" class="button q-my-lg" color="primary" />
            <q-space/>
          </div>
          </div>
      </div>
    </div>


</template>

<script>
import { ref } from "vue"

export default {
  name: "payment",
  data(){
    return{
      fullPayment: ref(true),
      partPayment: ref(false),
      customModel: ref('no')
    }
  }
}
</script>

<style scoped>
  .middle_box{
    height: 25vh;
    width: 25vh;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .frontend{
    margin: 15% 0 4% 0;
  }
  .grey_text{
      border-bottom: 6px dotted ;
    }
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
  .tick_box{
    padding: 1% 0;
    border-radius: 10px;
    border: 1px solid #4D0001;
  }
</style>
