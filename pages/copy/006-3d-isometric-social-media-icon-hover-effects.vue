<template lang="pug">
  .body
    ul
      li
        a(href="#")
          span
          span
          span
          font-awesome-icon(:icon="['fab','facebook-f']")
</template>

<script>
export default {
  name: "three-d-isometric-social-media-icon-hover-effects",
  head: {
    titleTemplate: "006-3d-isometric-social-media-icon-hover-effects"
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
.body {
  // background: #0a2a43;
  min-height: 1500px;
}
</style>