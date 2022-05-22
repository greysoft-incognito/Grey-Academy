<template>
  <div class="q-px-lg relative-position">
    <div class="text-primary text-bold text-center text-h6 q-my-md">
      {{ coursed }} Program
    </div>

    <div class="q-mb-md">
      <label for="" class="text-caption text-primary text-bold">
        First Name</label
      >
      <q-input dense outlined color="primary" bg-color="" />
    </div>

    <div class="q-mb-md">
      <label for="" class="text-caption text-primary text-bold">
        Last Name</label
      >
      <q-input dense outlined color="primary" bg-color="" />
    </div>

    <div class="q-mb-md">
      <label for="" class="text-caption text-primary text-bold">
        Email Address</label
      >
      <q-input dense outlined color="primary" bg-color="" />
    </div>

    <div class="q-mb-md">
      <label for="" class="text-caption text-primary text-bold">
        Phone Number</label
      >
      <q-input dense outlined color="primary" bg-color="" />
    </div>

    <div class="row">
      <q-space />
      <q-btn
        label="Submit"
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
export default {
  props: ["coursed"],
  data() {
    return {
      course: "",
    };
  },
  methods: {},
};
</script>

<style scoped></style>
