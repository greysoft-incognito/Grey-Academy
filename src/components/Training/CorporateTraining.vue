<template>
    <div class="q-px-lg relative-position">
      <!-- Close Button  -->
      <q-card-section class="row items-center fixed-top ">
        <q-space />
        <q-btn icon="close" class="bg-white" size="0.8rem" text-color="primary" round dense v-close-popup />
      </q-card-section>

      <div class="text-primary text-bold text-h6 q-my-md">Pay with Card</div>


      <div class="row justify-between">
        <div class="col-6 first_name">
          <div class="q-mb-md">
            <q-input outlined dense placeholder="First Name" color="primary" />
          </div>
        </div>
        <div class="col-6 last_name">
          <div class="q-mb-md">
            <q-input outlined dense placeholder="Last Name" color="primary" />
          </div>
        </div>
      </div>

      <div class="q-mb-md">
        <q-input dense outlined placeholder="Email" color="primary" bg-color=""  />
      </div>

      <div class="q-mb-md">
        <q-input outlined dense placeholder="e.g 08012345678" class="q-pa-none" color="primary" >
          <template v-slot:prepend>
            <q-btn-dropdown color="" class="" text-color="primary" flat icon="fa-solid fa-flag-usa" label="">
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

      <div>

      <div class="q-mb-md">
        <label for="" class="text-caption  text-primary text-bold"> Company</label>
        <q-input dense outlined color="primary" bg-color=""  />
      </div>

      <div class="q-mb-md">
        <label for="" class="text-caption  text-primary text-bold"> Company</label>
        <q-input dense outlined label="Business, Farming" color="primary" bg-color=""  />
      </div>

      <div>
        <label for="" class="text-caption  text-primary text-bold">Tell us about your needs</label>
        <q-input
          outlined
          type="textarea"
        />
      </div>




      <div class="row">
        <q-space/>
        <q-btn label="Submit" no-caps style="width:60%" size="1.12rem" class="button q-my-lg" color="primary" />
        <q-space/>
      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .first_name, .last_name{
    width: 48% !important;
  }

</style>
