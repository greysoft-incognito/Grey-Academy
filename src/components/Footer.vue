<template>
  <div class="row general_padding bg-primary">
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="q-pr-xl tweets">
        <h6 class="text-bold">ABOUT US</h6>
        <div class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores
          incidunt est vero eius voluptatibus aliquam ipsa aliquid.
        </div>
        <div>31 Gwari Avenue, Kaduna</div>
      </div>

      <q-input
        color="grey-3"
        class="bg-white q-mt-lg q-mr-sm"
        outlined
        v-model="text"
        placeholder=" Email "
      >
        <template v-slot:append>
          <q-btn label="Subscribe" color="primary" />
        </template>
      </q-input>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <h6 class="text-bold">LATEST NEWS</h6>
      <div class="q-pr-xl tweets">
        <div class="tweet q-mb-lg">
          <i class="fa-brands fa-twitter fa-2x q-mr-lg"></i>
          <div class="tweet_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. harum sint
            voluptatibus! Provident, temporibus.
          </div>
        </div>
        <div class="tweet q-mb-lg">
          <i class="fa-brands fa-twitter fa-2x q-mr-lg"></i>
          <div class="tweet_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. cumque
            laboriosam aperiam dolor necessitatibus, veniam beatae dolorem iste
            eveniet harum sint voluptatibus! Provident, temporibus.
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-my-md">
      <h6 class="text-bold">INSTAGRAM</h6>
      <div class="grid_card">
        <div class="picture1"></div>
        <div class="picture2"></div>
        <div class="picture3"></div>
        <div class="picture4"></div>
        <div class="picture5"></div>
        <div class="picture6"></div>
      </div>
    </div>
  </div>

  <q-banner class="bg-black general_padding">
    <div class="row justify-between items-center">
      <div
        class="rights text-caption text-info col-lg-6 col-md-6 col-sm-6 col-xs-12 text-left q-mt-sm"
      >
        ©2022 All Rights Reserved. Greysoft
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <ul class="row">
          <li>
            <a href=""><i class="fa-brands fa-facebook fa-2x q-mx-sm"></i></a>
          </li>
          <li>
            <a href=""> <i class="fa-brands fa-instagram fa-2x q-mx-sm"></i></a>
          </li>
          <li>
            <a href=""> <i class="fa-brands fa-linkedin fa-2x q-mx-sm"></i></a>
          </li>
          <li>
            <a href=""> <i class="fa-brands fa-pinterest fa-2x q-mx-sm"></i></a>
          </li>
          <li>
            <a href=""> <i class="fa-brands fa-twitter fa-2x q-mx-sm"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </q-banner>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style: none;
  /* display: flex; */
  justify-content: end;
  padding: 0;
}

a {
  color: rgba(255, 255, 255, 0.64);
}
.general_padding {
  padding: 0 8%;
}
.grid_card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
}

.grid_card div {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.picture1 {
  background: url("/Images/Footer/Frame66.png");
}
.picture2 {
  background: url("/Images/Footer/Frame67.png");
}
.picture3 {
  background: url("/Images/Footer/Frame68.png");
}
.picture4 {
  background: url("/Images/Footer/Frame68(1).png");
}
.picture5 {
  background: url("/Images/Footer/Frame69.png");
}
.picture6 {
  background: url("/Images/Footer/image7.png");
}
.tweet {
  display: flex;
}
@media screen and (max-width: 600px) {
  .rights {
    text-align: center !important;
  }
  ul {
    justify-content: center;
  }
  .tweets {
    padding-right: 0 !important;
  }
}
</style>
