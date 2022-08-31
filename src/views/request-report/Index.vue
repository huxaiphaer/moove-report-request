<template>
  <div class="main-container">
    <v-snackbar
        :value="showSnackBar"
        absolute
        top
        right
        :color="snackBarColor"
        outlined
    >
      {{snackBarMessage}}
    </v-snackbar>
    <div class="form-container py-5">
      <h2 class="text-center mb-5 mt-5">Request Report Page</h2>
      <v-form class="d-flex flex-column col-11 mx-auto px-2">
        <div class="d-flex flex-column flex-md-row flex-lg-row">
          <v-spacer/>
          <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              placeholder="Email to receive report"
              class="mt-4 my-md-4 my-lg-4"
              outlined
              @blur="$v.email.$touch()"
              @input="$v.email.$touch()"
              dense
          />
          <app-date-picker
              @dateChange="setDate($event, 'startDate')"
              label="Start date time"
              :date-errors="startDateErrors"
          />
          <app-date-picker
              @dateChange="setDate($event, 'endDate')"
              label="End date time"
              :date-errors="endDateErrors"
          />
          <v-spacer />
        </div>
      </v-form>
      <div class="d-flex flex-row justify-center">
        <v-btn
            type="submit"
            elevation="0"
            color="green lighten-1"
            :disabled="$v.$invalid || loading "
            @click="sendEmail"
        >
          Send Request
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import AppDatePicker from "../../components/AppDatePicker";

export default {
  name: "Index",
  components: {AppDatePicker},
  data() {
    return {
      email: "",
      startDate: "",
      endDate: "",
      showSnackBar: false,
      snackBarColor: "",
      snackBarMessage: "",
      loading: false,
    };
  },
  methods: {
    setDate(event, dateProp) {
      this[dateProp] = event
      this.$v[dateProp].$touch()
    },
    sendEmail() {
      this.axios.post("reports/", {
        "email": this.email,
        "start_date": this.startDate,
        "end_date": this.endDate
      }).then(() => {
        this.showSnackBar = true
        this.snackBarColor = "success"
        this.snackBarMessage = "Report request was successful"
      }).catch((error) => {
        this.showSnackBar = true
        this.snackBarColor = "error"
        this.snackBarMessage = error.response.message || "Report request failed"
      })
    }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email &&
      errors.push("Email must be valid");
      !this.$v.email.required &&
      errors.push("Email is required");
      return errors;
    },
    startDateErrors() {
      const errors = [];
      if (!this.$v.startDate.$dirty) return errors;
      !this.$v.startDate.required &&
      errors.push("Start date is required");
      return errors;
    },
    endDateErrors() {
      const errors = [];
      if (!this.$v.endDate.$dirty) return errors;
      !this.$v.endDate.required &&
      errors.push("End date is required");
      return errors;
    }
  },
  validations: {
    email: { required, email },
    startDate: { required },
    endDate: { required },
  },
}
</script>

<style scoped>
.form-container {
  border: .2em solid gray;
  width: 80vw;
  height: auto;
  margin: auto;
}
.main-container {
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.theme--light.v-text-field--outlined > .v-input__control > .v-input__slot fieldset {
  background-color: white !important;
}
.theme--light.v-input input, .theme--light.v-input textarea {
  background-color: white !important;
}
</style>
