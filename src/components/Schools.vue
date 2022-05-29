<template>
  <ul class="bg-white text-primary inner_list school">
    <div class="text-center text-bold text-h5 q-my-md">
      Grey <span class="text-weight-light">Academy</span> Courses
    </div>
    <div class="schools text-bold text-h5">Schools</div>
    <li
      class="row items-center justify-between text-h6"
      @click="this.$router.push('/programming')"
    >
      Tech <q-icon name="arrow_forward" size="1.3rem" />
    </li>
    <li
      class="row items-center justify-between text-h6"
      @click="this.$router.push('/creative')"
    >
      Creative <q-icon name="arrow_forward" size="1.3rem" />
    </li>
    <li
      class="row items-center justify-between text-h6"
      @click="this.$router.push('/business')"
    >
      Business School <q-icon name="arrow_forward" size="1.3rem" />
    </li>
    <li
      class="row items-center justify-between text-h6"
      @click="this.$router.push('/design')"
    >
      Design <q-icon name="arrow_forward" size="1.3rem" />
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  margin: 0;
  /* padding: 0 30px; */
  list-style-type: none;
}
ul li:not(:last-child) {
  margin-right: 40px;
}
ul li {
  border: 2px solid transparent;
  border-radius: 5px;
  /* padding: 10px; */
  transition: background 0.2s;
}
.inner_list {
  position: absolute;
  display: block;
  margin: 12px -5%;
  padding: 0 8%;
  border-radius: 10px;
  transition: opacity 0.2s, visibility 0.2s;
  z-index: 1;
}
.school {
  width: 100%;
  height: 100%;
  margin: 0;
}

.companies li {
  width: 100% !important;
}
.schools {
  text-decoration: underline;
  padding: 0 2%;
}
.image {
  cursor: pointer;
}
.image:hover .testimonies {
  cursor: pointer;
  color: red !important;
}
.testimonies {
  cursor: pointer;
}
.testimonies:hover {
  color: green !important;
}
.testimonies div {
  text-decoration: underline;
  /* display: none; */
  /* visibility: hidden; */
}
.inner_list li {
  width: 70%;
  margin: 2% 0;
  padding: 0.5%;
  line-height: 1.7;
  cursor: pointer;
}
.inner_list li:hover {
  background: rgb(162, 4, 23, 0.04);
}
ul li:hover a {
  color: #f9f8fd;
}
ul li:hover ul {
  visibility: visible;
  opacity: 1;
}

@media screen and (max-width: 520px) {
  .inner_list li {
    width: 100%;
  }
}
</style>
