<template lang="pug">
  .body
    ul
      li
        a(href="#")
          font-awesome-icon.facebook(:icon="['fab','facebook-f']")
      li
        a(href="#")
          font-awesome-icon.twitter(:icon="['fab','twitter']")
      li
        a(href="#")
          font-awesome-icon.whatsapp(:icon="['fab','whatsapp']")
      li
        a(href="#")
          font-awesome-icon.linkedin(:icon="['fab','linkedin-in']")
      li
        a(href="#")
          font-awesome-icon.instagram(:icon="['fab','instagram']")
</template>

<script>
export default {
  head: {
    titleTemplate: '015-isometric-social-media-icons',
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.body {
  background: #ccc;
  min-height: 100vh;
}

ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  li {
    list-style: none;
    margin: 0 40px;

    a {
      position: relative;
      display: block;
      width: 80px;
      height: 80px;
      background: #fff;
      text-align: center;
      transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
      transition: 0.5s;
      box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);

      &::before {
        content: '';
        position: absolute;
        top: 10px;
        left: -20px;
        height: 100%;
        width: 20px;
        background: #b1b1b1;
        transition: 0.5;
        transform: skewY(-45deg);
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: -10px;
        height: 20px;
        width: 100%;
        background: #b1b1b1;
        transition: 0.5;
        transform: skewX(-45deg);
      }

      &:hover {
        transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px);
        box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
      }

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        color: #262626;
        line-height: 80px;
        transition: 0.5s;
      }
    }
  }
}
</style>
