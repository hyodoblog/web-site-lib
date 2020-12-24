<template lang="pug">
  .body
    .container
      .box(data-tilt)
        .imgBx
          img(src="http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/106/1920x1080xd7a3f3f2954d84a11f8064.jpg")
        .contentBx
          h2 Tilt Box Hover Effects
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      .box
        .imgBx
          img(src="http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/108/1920x1080x90457237d0a2e0e31d9018.jpg")
        .contentBx
          h2 Tilt Box Hover Effects
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<script>
import VanillaTilt from "vanilla-tilt"

export default {
  mounted() {
    VanillaTilt.init(document.querySelectorAll(".box"), {
      max: 25,
      speed: 400,
    })
  },
  head: {
    titleTemplate: "008-mousemove-3d-parallax-tilt-effects",
  },
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  transform-style: preserve-3d;

  .box {
    position: relative;
    width: 450px;
    height: 300px;
    margin: 60px 0;
    background: #000;
    background: #000;
    transform-style: preserve-3d;

    &:hover {
      box-shadow: 0 50px 80px rgba(0, 0, 0, 0.2);
    }

    .imgBx {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .contentBx {
      position: absolute;
      top: 50%;
      left: 50px;
      right: 50px;
      background: #fff;
      transform: translateZ(20px) scaleY(0);
      padding: 40px 25px;
      transform-origin: top;
      transition: 0.5s;
      transform-style: preserve-3d;
    }

    &:hover .contentBx {
      transform: translateZ(50px) scaleY(1);
    }
  }
}
</style>
