<template>
  <div class="row">
    <div
      class="jumbotron col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-5"
    >
      <div class="container">
        <p class="lead" v-text="title"></p>
        <h1 class="display-4 text-center" :data-test="id" v-text="number"></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    number: {
      type: [Number, String],
      required: true
    }
  }
};
</script>
