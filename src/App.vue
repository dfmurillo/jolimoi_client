<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1"
        >Decimal to Roman Converter with {{ convertionType }}</span
      >
      <form class="form-inline my-2 my-lg-0 navbar-brand">
        <div class="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="requestType"
            ref="requestType"
            checked
            @change="ChangeRequestType"
          />
          <label class="custom-control-label " for="requestType">
            Convertion Type
          </label>
        </div>
      </form>
    </nav>
    <DecimalToRomanForm></DecimalToRomanForm>
  </div>
</template>

<script>
import DecimalToRomanForm from "./components/DecimalToRomanForm.vue";

export default {
  name: "app",
  components: { DecimalToRomanForm },
  data() {
    return {
      convertionType: "Node.js"
    };
  },
  methods: {
    ChangeRequestType() {
      this.convertionType = this.$refs.requestType.checked ? "Node.js" : "JS";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
