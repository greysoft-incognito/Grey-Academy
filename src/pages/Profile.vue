<template>
  <div class="main">
    <!-- Search bar  -->
    <div class="row justify-between">
      <q-space />
      <q-input rounded outlined v-model="text" dense class="input">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <!-- profile  -->
    <div class="row justify-between">
      <div class="col-5"></div>
      <div class="col-6"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  padding: 2% 8%;
}
.input {
  width: 40%;
}
</style>
