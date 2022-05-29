<template>
  <div class="row main">
    <div class="first_section">
      <div class="text-h2 text-bold text-primary schedule">
        Schedule an Appointment with us
      </div>
      <div class="q-my-xl text-subtitle1 text-justify explanation_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel inventore
        iusto similique velit tempora sed quis debitis culpa id saepe iste nisi,
        ipsam et dignissimos molestias perspiciatis esse eos. Sapiente.
      </div>

      <div class="row relative-position">
        <div class="col-6 row items-center justify-evenly">
          <q-avatar size="3.5rem">
            <q-img src="/Images/Appointment/appoint1.png" />
          </q-avatar>
          <div class="">
            <div class="text-subtitle2 text-bold">Abdullahi Uza</div>
            <div class="text-caption">Uza Consulting</div>
          </div>
        </div>

        <div class="col-6 row items-center justify-evenly">
          <q-avatar size="3.5rem">
            <q-img src="/Images/Appointment/appoint2.png" />
          </q-avatar>
          <div class="">
            <div class="text-subtitle2 text-bold">Chukwu Henry</div>
            <div class="text-caption">Zenith Power</div>
          </div>
        </div>

        <div class="appointment_image"></div>
      </div>
    </div>

    <div class="second_section">
      <div class="q-px-lg relative-position form">
        <div class="first_name">
          <div class="q-mb-md">
            <label for="" class="text-primary text-bold">First Name</label>
            <q-input outlined dense placeholder="First Name" color="primary" />
          </div>
        </div>
        <div class="last_name">
          <div class="q-mb-md">
            <label for="" class="text-primary text-bold">Last Name</label>
            <q-input outlined dense placeholder="Last Name" color="primary" />
          </div>
        </div>

        <div class="q-mb-md">
          <label for="" class="text-primary text-bold">Email</label>
          <q-input
            dense
            outlined
            placeholder="Email"
            color="primary"
            bg-color=""
          />
        </div>

        <div>
          <label for="" class="text-caption text-primary text-bold"
            >Short Note</label
          >
          <q-input outlined type="textarea" />
        </div>

        <div class="row">
          <q-space />
          <q-btn
            label="Schedule Appointment"
            no-caps
            size="1rem"
            class="button q-my-lg"
            color="primary"
          />
          <q-space />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  padding: 5% 8%;
  background: #fbf5f6;
  position: relative;
}
.first_section,
.second_section {
  width: 50%;
}

.second_section {
  position: relative;
}
.form {
  width: 70%;
  padding: 5%;
  background: #f3e4e4;
  border-radius: 10px;
  position: absolute;
  top: 80%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.appointment_image {
  background-image: url("/Images/appointment.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  position: absolute;
  top: -35%;
  left: 110%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 911px) {
  .schedule {
    font-size: 3rem !important;
  }

  .form {
    width: 80%;
    top: 70%;
    left: 60%;
  }
  .appointment_image {
    height: 80px;
    width: 80px;
    top: -40%;
    left: 106%;
  }
}

@media screen and (max-width: 771px) {
  .first_section,
  .second_section {
    width: 80%;
    margin: 0 auto;
  }
  .form {
    position: relative;
    top: 65%;
    left: 50%;
  }
}
@media screen and (max-width: 601px) {
  .schedule {
    font-size: 2.6rem !important;
    line-height: 1.2;
  }
  .first_section,
  .second_section {
    width: 80%;
    margin: 0 auto;
  }
  .form {
    width: 100%;
    position: relative;
    top: 65%;
    left: 50%;
  }
}
@media screen and (max-width: 474px) {
  .schedule {
    font-size: 2.6rem !important;
  }
  .first_section,
  .second_section {
    width: 80%;
    margin: 0 auto;
  }
  .form {
    width: 100%;
    position: relative;
    top: 60%;
    left: 50%;
  }
  .appointment_image {
    height: 80px;
    width: 80px;
    top: 0%;
    left: 105%;
  }
}
@media screen and (max-width: 395px) {
  .schedule {
    font-size: 2rem !important;
  }
  .explanation_text {
    font-size: 0.9rem !important;
    margin: 5% 0 !important;
  }
  .second_section {
    width: 100%;
    margin: 0 auto;
  }
  .form {
    width: 100%;
    position: relative;
    top: 58%;
    left: 50%;
  }
}
</style>
