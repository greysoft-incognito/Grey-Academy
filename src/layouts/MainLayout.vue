<template>
  <q-layout view="Hh lpR fFf">
    <!-- <q-header elevated> -->
    <q-toolbar class="bg-white relative-position navbar">
      <Header @toggleLeftDrawer="toggleLeftDrawer" />
    </q-toolbar>
    <!-- <q-toolbar class="bg-white" > -->
    <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->
    <!--
          <div class="text-primary text-h6">
            <div> <span class="grey_text text-bold">Grey</span> <span class="text-weight-regular">Academy</span> </div>
          </div>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar> -->
    <!-- </q-header> -->

    <!-- <q-header> -->

    <!-- </q-header> -->

    <q-drawer
      v-model="leftDrawerOpen"
      style="height: 100vh"
      bordered
      side="right"
    >
      <q-list>
        <MobileDrawer />
      </q-list>
    </q-drawer>

    <q-footer
      class="absolute-bottom"
      v-show="
        !this.$router.currentRoute.value.path.split('/').includes('signup') &&
        !this.$router.currentRoute.value.path.split('/').includes('login')
      "
    >
      <Footer />
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import Header from "components/Header.vue";
import Footer from "components/Footer.vue";
import MobileDrawer from "src/components/MobileDrawer.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Header,
    Footer,
    MobileDrawer,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.navbar {
  height: 14vh;
  z-index: 1;
}

@media screen and (max-width: 888px) {
  .navbar {
    height: 10vh;
  }
}
</style>
