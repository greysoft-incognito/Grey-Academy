<template>
  <div class="q-px-lg relative-position">
    <div class="text-primary text-bold text-center text-h6 q-my-md">
      {{ coursed }}
    </div>

    <div class="q-mb-md">
      <label for="" class="text-caption text-primary text-bold">
        Full Name</label
      >
      <q-input v-model="name" dense outlined color="primary" bg-color="" />
    </div>

    <div class="q-mb-md">
      <label for="" class="text-caption text-primary text-bold">
        Email Address</label
      >
      <q-input v-model="email" dense outlined color="primary" bg-color="" />
    </div>

    <div class="q-mb-md">
      <label for="" class="text-caption text-primary text-bold">
        Phone Number</label
      >
      <q-input v-model="phone" dense outlined color="primary" bg-color="" />
    </div>

    <div class="row">
      <q-space />
      <q-btn
        label="Submit"
        @click="sendMail()"
        no-caps
        style="width: 50%"
        size="1.05rem"
        class="button q-mt-xl q-mb-sm"
        color="primary"
      />
      <q-space />
    </div>

    <div class="text-caption text-center text-primary">
      Our Team would reach out to you <br />
      Thank You!
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  props: ["coursed"],
  data() {
    return {
      course: "",
      name: ref(""),
      email: ref(""),
      phone: ref(""),
    };
  },
  methods: {
    sendMail() {
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("phone", this.phone);
      console.log(formData);
      console.log(this.name);
      console.log(this.email);
      console.log(this.phone);
      // axios({
      //   method: "POST",
      //   url: "",
      //   data: formData,
      // })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
  mounted() {
    // this.sendMail();
  },
};
</script>

<style scoped></style>
