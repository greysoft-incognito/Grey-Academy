<template>
  <div class="main">
    <!-- <div class="q-my-xl" >
      <div class="text-bold text-subtitle1">Supported by world leading brands and organizations</div>
      <div class="sponsors  items-center grid_sponsors">
        <q-img src="/Images/Sponsors/spon1.png"  class="col-2 q-my-md" />
        <q-img src="/Images/Sponsors/spon2.png"  class="col-2 q-my-md " />
        <q-img src="/Images/Sponsors/spon3.png"  class="col-2 q-my-md " />
        <q-img src="/Images/Sponsors/spon4.png"  class="col-2 q-my-md " />
        <q-img src="/Images/Sponsors/spon5.png"  class="col-2 q-my-md " />
        <q-img src="/Images/Sponsors/spon6.png"  class="col-2 q-my-md " />
      </div>
    </div> -->

    <div
      class="text-h4 text-primary text-bold text-center q-my-xl small_heading"
    >
      What You Will Get
    </div>
    <div class="grid_cards q-my-xl">
      <q-card class="q-px-sm q-py-xs relative-position hover_effect">
        <div class="q-my-md">
          <q-avatar
            size="3.8rem"
            font-size="2.5rem"
            color="primary"
            text-color="white"
            icon="fa-solid fa-graduation-cap"
          />
        </div>
        <div class="text-primary text-center q-my-lg text-h6 what_topic">
          In-demand Skills
        </div>
        <div class="text-center q-mb-xl text-subtitle1">
          Gain hands-on tech skills you need to build a career successfully in
          the African tech space, do not be left behind.
        </div>
        <div class="row absolute-bottom q-mt-lg q-mb-xs q-mr-xs">
          <q-space />
        </div>
      </q-card>

      <q-card class="q-px-sm q-py-xs relative-position hover_effect">
        <div class="q-my-md">
          <q-avatar
            size="3.8rem"
            font-size="2.5rem"
            color="primary"
            text-color="white"
            icon="fa-solid fa-person-chalkboard"
          />
        </div>
        <div class="text-primary text-center q-my-lg text-h6 what_topic">
          Experienced Facilitators
        </div>
        <div class="text-center q-mb-xl text-subtitle1">
          Learn from practising world class professionals who have been in the
          trenches of work and navigated a path to success.
        </div>
        <div class="row absolute-bottom q-mt-lg q-mb-xs q-mr-xs">
          <q-space />
        </div>
      </q-card>

      <q-card class="q-px-sm q-py-xs relative-position hover_effect">
        <div class="q-my-md">
          <q-avatar
            size="3.8rem"
            font-size="2.5rem"
            color="primary"
            text-color="white"
            icon="fa-solid fa-chart-line"
          />
        </div>
        <div class="text-primary text-center q-my-lg text-h6 what_topic">
          Project Based Learning
        </div>
        <div class="text-center q-mb-xl text-subtitle1">
          We provide you with projects and teammates to collaborate on projects
          like you would in a real work setting.
        </div>
        <div class="row absolute-bottom q-mt-lg q-mb-xs q-mr-xs">
          <q-space />
        </div>
      </q-card>

      <q-card class="q-px-sm q-py-xs relative-position hover_effect">
        <div class="q-my-md">
          <q-avatar
            size="3.8rem"
            font-size="2.5rem"
            color="primary"
            text-color="white"
            icon="fa-solid fa-graduation-cap"
          />
        </div>
        <div class="text-primary text-center q-my-lg text-h6 what_topic">
          100% Hybrid
        </div>
        <div class="text-center q-mb-xl text-subtitle1">
          we set the pace in creating a virtual experience that stimulates you
          to learn, practice and do. We don't forget to have some fun.
        </div>
        <div class="row absolute-bottom q-mt-lg q-mb-xs q-mr-xs">
          <q-space />
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  padding: 0 5%;
}
.hover_effect:hover {
  cursor: pointer;
  background: #4d0001 !important;
  color: white !important;
}
.hover_effect:hover .what_topic {
  color: white !important;
}
</style>
