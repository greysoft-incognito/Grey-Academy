<template>
  <div class="">
    <q-img src="Images/Vector.png" class="vector" />
    <!-- Logo -->
    <div class="absolute nav row justify-between">
      <div
        class="text-primary text-h5 cursor-pointer logo_text"
        @click="this.$router.push('/')"
      >
        <div>
          <span class="grey_text text-bold">Grey</span>
          <span class="text-weight-regular">Academy</span>
        </div>
      </div>

      <!-- Nav-links -->
      <div
        class="hide_me"
        v-show="
          !this.$router.currentRoute.value.path.split('/').includes('signup') &&
          !this.$router.currentRoute.value.path.split('/').includes('login')
        "
      >
        <ul class="main_list">
          <li><a>About Us</a></li>
          <li>
            <a>Schools</a>
            <ul class="bg-white text-primary inner_list school">
              <div class="text-center text-bold text-subtitle1">
                Grey <span class="text-weight-light">Academy</span> Courses
              </div>
              <div class="schools q-mx-sm text-bold text-subtitle1">
                Schools
              </div>
              <li
                class="row items-center justify-between"
                @click="this.$router.push('/programming')"
              >
                Tech <q-icon name="arrow_forward" size="1.2rem" />
              </li>
              <li
                class="row items-center justify-between"
                @click="this.$router.push('/creative')"
              >
                Creative <q-icon name="arrow_forward" size="1.2rem" />
              </li>
              <li
                class="row items-center justify-between"
                @click="this.$router.push('/business')"
              >
                Business School <q-icon name="arrow_forward" size="1.2rem" />
              </li>
              <li
                class="row items-center justify-between"
                @click="this.$router.push('/design')"
              >
                Design <q-icon name="arrow_forward" size="1.2rem" />
              </li>
              <div class="row q-my-lg q-px-md">
                <!-- <q-space/> -->
                <q-img
                  src="Images/Homepage/testimonial.png"
                  class="image"
                  width="30%"
                />
                <div
                  class="q-ml-md testimonies"
                  @click="this.$router.push('/ourstory')"
                >
                  <div class="text-subtitle1 text-bold">Read testimonials</div>
                  <div class="text-caption">Over 50 success stories</div>
                </div>
                <q-space />
              </div>
            </ul>
          </li>
          <li>
            <a>For companies</a>
            <ul class="bg-white text-primary inner_list companies q-pa-md">
              <li>Corporate Training</li>
              <li>Sponsorships</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- Nav Buttons -->
      <div
        class="row hide_me"
        v-show="
          !this.$router.currentRoute.value.path.split('/').includes('signup') &&
          !this.$router.currentRoute.value.path.split('/').includes('login')
        "
      >
        <q-btn
          label="Login"
          text-color="primary"
          flat
          class="q-mx-sm button_text"
        />
        <q-btn
          label="Register"
          text-color="white q-ml-sm"
          class="bg-primary button_text"
          flat
        />
      </div>

      <!-- Hamburger Button  -->
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('toggleLeftDrawer')"
        class="hamburger"
        color="primary"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grey_text {
  border-bottom: 6px dotted;
}
.nav {
  width: 100%;
  top: 15%;
  left: 0;
  padding: 0 8%;
}
.vector {
  width: 60%;
  position: absolute;
  top: 100%;
  left: 45%;
  transform: translate(-50%, -100%);
}

.main_list {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

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
ul li ul li {
  padding: 10px;
}
ul li a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s;
}
.inner_list {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  display: block;
  margin: 12px -5%;
  padding: 0;
  border: 1px solid rgb(77, 0, 1, 0.75);
  border-radius: 10px;
  transition: opacity 0.2s, visibility 0.2s;
  z-index: 1;
}
.school {
  width: 100%;
  margin: 0;
}

.companies li {
  width: 100% !important;
}
.schools {
  text-decoration: underline;
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
  width: 60%;
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
.hamburger {
  display: none;
}

@media screen and (max-width: 1260px) {
  .vector {
    position: absolute;
    top: 90%;
    left: 45%;
    transform: translate(-50%, -100%);
  }
}

@media screen and (max-width: 1100px) {
  .vector {
    width: 55%;
    top: 80%;
    left: 45%;
  }
  .nav {
    top: 7%;
    left: 0;
  }
}

@media screen and (max-width: 957px) {
  .vector {
    width: 62%;
    top: 75%;
  }

  ul li a {
    font-size: 0.85rem !important;
  }
  .nav {
    padding: 0 5%;
  }
}

@media screen and (max-width: 888px) {
  .vector {
    width: 65%;
    top: 93%;
  }

  .companies {
    width: 50% !important;
  }

  .nav {
    top: 5%;
    padding: 0 5%;
  }
}

@media screen and (max-width: 865px) {
  .logo_text {
    font-size: 1.25rem;
  }
  ul li a {
    font-size: 0.7rem !important;
  }
  .button_text {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 771px) {
  .hide_me {
    display: none;
  }
  .hamburger {
    display: block;
  }
  .vector {
    width: 60%;
    position: absolute;
    top: 27%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .nav {
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 5%;
  }
}

@media screen and (max-width: 555px) {
  .vector {
    top: 20%;
  }
}

@media screen and (max-width: 410px) {
  .vector {
    top: 15%;
  }
}
</style>
