<template>
  <div class="bg-white">
    <div class="text-center q-my-lg">
      <div class="text-bold text-h3 text-primary top_text">
        Create a new account
      </div>
      <div class="text-subtitle1 q-mt-sm">
        Already have an account?
        <router-link class="text-positive" to="/login">Sign in</router-link>
      </div>
    </div>

    <div class="form">
      <div class="row justify-between">
        <div class="col-6 first_name">
          <div class="q-mb-md">
            <label for="" class="text-primary text-bold text-subtitle1">
              First Name</label
            >
            <q-input
              outlined
              color="primary"
              bg-color="secondary"
              v-model="firstName"
            />
          </div>
        </div>
        <div class="col-6 last_name">
          <div class="q-mb-md">
            <label for="" class="text-primary text-bold text-subtitle1">
              Last Name</label
            >
            <q-input
              outlined
              color="primary"
              bg-color="secondary"
              v-model="lastName"
            />
          </div>
        </div>
      </div>
      <div class="q-mb-md">
        <label for="" class="text-primary text-bold text-subtitle1">
          Email</label
        >
        <q-input
          outlined
          color="primary"
          bg-color="secondary"
          v-model="email"
        />
      </div>
      <div class="q-mb-md">
        <label for="" class="text-primary text-bold text-subtitle1">
          Password</label
        >
        <q-input
          outlined
          color="primary"
          bg-color="secondary"
          v-model="password"
        />
        <div class="row q-mt-xs">
          <q-space />
          <div class="cursor-pointer">Forgot Password?</div>
        </div>
      </div>
      <div class="q-gutter-sm">
        <q-checkbox
          v-model="customModel"
          color="positive"
          label="Do you agree with the terms & conditions?"
          true-value="yes"
          false-value="no"
        />
      </div>

      <div class="row">
        <q-space />
        <q-btn
          label="Sign Up"
          size="1.15rem"
          @click="signup()"
          style="width: 35%"
          text-color="white"
          flat
          no-caps
          class="bg-primary q-mt-lg button submit_button"
        />
        <q-space />
      </div>

      <!-- <div class="openAuth text-h6 text-primary"> <span>Or sign up with</span> </div>

      <div class="text-center q-mt-xl">
        <a href=""  target="_blank" >
          <q-avatar style="cursor:pointer" class="q-mx-md" v-ripple="true" size="2rem" >
            <q-img src="Images/facebooklogo.png" />
        </q-avatar>
        </a>
        <a href=""  >
          <q-avatar style="cursor:pointer" class="q-mx-md" v-ripple="true" size="2rem" >
              <q-img src="Images/google.png"/>
          </q-avatar>
        </a>
        <a href=""  >
          <q-avatar style="cursor:pointer" class="q-mx-md" v-ripple="true" size="2rem" >
              <q-img src="Images/linkedin.png"/>
          </q-avatar>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Signup",
  components: {},
  data() {
    return {
      customModel: ref("no"),
      firstName: ref(""),
      lastName: ref(""),
      email: ref(""),
      password: ref(""),
    };
  },
  method: {
    signup() {
      let formData = new FormData();
      formData.append("firstName", this.firstName);
      formData.append("lastName", this.lastName);
      formData.append("email", this.email);
      formData.append("password", this.password);

      axios({
        method: "POST",
        url: "",
        data: { formData },
      })
        .then(({ data, status }) => {
          if (status === 200 || status === 201) {
            console.log(data);
            resolve();
          }
        })
        .catch((error) => {
          reject();
        });
    },
  },
};
</script>

<style>
.form {
  padding: 0 25% 8%;
}
.first_name,
.last_name {
  width: 48% !important;
}
.openAuth {
  width: 55%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 8% auto;
}

.openAuth span {
  background: #fff;
  padding: 0 10px;
}
@media screen and (max-width: 771px) {
  .form {
    padding: 0 15% 8%;
  }
  .top_text {
    font-size: 1.5rem !important;
  }
}

@media screen and (max-width: 500px) {
  .first_name,
  .last_name {
    width: 100% !important;
  }
  .submit_button {
    width: 50% !important;
  }
}
</style>
