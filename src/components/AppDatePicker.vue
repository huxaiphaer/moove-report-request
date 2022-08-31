<template>
  <div class="my-4 ma-md-4 ma-ml-4">
    <vue-ctk-date-time-picker v-model="date" />
  </div>
</template>

<script>
export default {
  name: "AppDatePicker",
  props: {
    label: {
      type: String,
      default: "date picker"
    },
    dateErrors: {
      default: () => ([])
    }
  },
  data: function () {
    return {
      date: "",
    }
  },
  watch: {
    date() {
      this.$emit("dateChange", new Date(this.date).toISOString())
    }
  }
}
</script>

<style scoped>
.ctk-date-time-picker .field .field-input {
  height: 3em !important;
}
</style>
