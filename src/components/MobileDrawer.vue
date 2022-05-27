<template>
  <div>
    <div
      class="text-primary text-h5 cursor-pointer logo_text q-my-md text-center"
      @click="this.$router.push('/')"
    >
      <div>
        <span class="grey_text text-bold">Grey</span>
        <span class="text-weight-regular">Academy</span>
      </div>
    </div>
    <!-- Auth Buttons  -->
    <div class="row justify-evenly q-mt-xl q-mb-md">
      <q-btn
        color="primary"
        class="bg-secondary button q-mt-md"
        flat
        label="Login"
        no-caps
        size="1.1rem"
      />
      <q-btn
        color="white"
        class="bg-primary button q-mt-md"
        flat
        label="Register"
        no-caps
        size="1.1rem"
      />
    </div>

    <div class="row justify-evenly">
      <!-- Profile Image and Details -->
      <!-- <div class=" row q-px-md items-center col-lg-5 col-md-5 col-sm-5 col-xs-10 q-my-md">
                  <q-avatar size="4rem" font-size="2.5rem" color="teal" class="q-mr-md" text-color="white" icon="person" />
                  <div>
                    <div class="q-my-xs text-bold text-h5"> Big Billy</div>
                    <div class="q-my-xs">08012345678</div>
                  </div>
                </div> -->
    </div>

    <q-separator size="1px" class="q-mt-md q-mb-md" />

    <q-list class="q-py-md q-px-md">
      <q-expansion-item
        expand-separator
        label="Schools"
        class="text-h6 text-black q-mb-lg list_font"
      >
        <q-card>
          <q-card-section>
            <q-item
              clickable
              class="q-mb-lg list_font text-h6"
              v-ripple
              style="border-radius: 15px"
              to="/programming"
            >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-code-branch" size="1.6rem" />
              </q-item-section>
              <q-item-section class="row">
                <q-item-label>Tech School</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              class="q-mb-lg list_font text-h6"
              v-ripple
              style="border-radius: 15px"
              to="/creative"
            >
              <q-item-section avatar>
                <q-icon
                  name="fa-brands fa-creative-commons-remix"
                  size="2rem"
                />
              </q-item-section>
              <q-item-section class="row">
                <q-item-label>Creative School</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              class="q-mb-lg list_font text-h6"
              v-ripple
              style="border-radius: 15px"
              to="/business"
            >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-business-time" size="1.6rem" />
              </q-item-section>
              <q-item-section class="row">
                <q-item-label>Business School</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              class="q-mb-lg list_font text-h6"
              v-ripple
              style="border-radius: 15px"
              to="/design"
            >
              <q-item-section avatar>
                <q-icon name="fa-brands fa-figma" size="1.6rem" />
              </q-item-section>
              <q-item-section class="row">
                <q-item-label>Design School</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        label="Companies"
        class="text-h6 text-black q-mb-lg list_font"
      >
        <q-card>
          <q-card-section>
            <q-item
              clickable
              class="q-mb-lg list_font text-h6"
              v-ripple
              style="border-radius: 15px"
            >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-people-group" size="1.6rem" />
              </q-item-section>
              <q-item-section class="row">
                <q-item-label>Corporate Training</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              class="q-mb-lg list_font text-h6"
              v-ripple
              style="border-radius: 15px"
            >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-hand-holding-dollar" size="1.6rem" />
              </q-item-section>
              <q-item-section class="row">
                <q-item-label>Sponsorships</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-item
        clickable
        class="q-mb-lg list_font text-h6"
        v-ripple
        style="border-radius: 15px"
      >
        <q-item-section class="row">
          <q-item-label>About Us</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        class="q-mb-lg list_font text-h6"
        v-ripple
        to="/help"
        style="border-radius: 15px"
      >
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <!-- <q-list class="q-px-md"> -->
    <!-- </q-list> -->
  </div>
  <div class="bg-primary absolute-bottom">
    <div
      class="q-mr-md text-center q-py-xs text-weight-bold text-white"
      style=""
    >
      ©GreyAcademy
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.button {
  width: 40%;
}
.grey_text {
  border-bottom: 7px dotted;
}

@media screen and (max-width: 401px) {
  .list_font {
    font-size: 1rem;
  }
}
</style>
