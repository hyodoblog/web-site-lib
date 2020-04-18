<template lang="pug">
  .body
    .slider
      .slide
        p Slide 1
      .slide
        p Slide 2
      .slide
        p Slide 3
      .slide
        p Slide 4
</template>

<script>
export default {
  name: "responsive-image-slideshow",
  head: {
    titleTemplate: "002-responsive-image-slideshow"
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
}

.slider {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #1f1f1f;
  overflow: hidden;
  position: absolute;

  & > * {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #1f1f1f;
    animation: slide 12s infinite;
    overflow: hidden;
  }
}

.slide {
  &:nth-child(1) {
    left: 0%;
    animation-delay: -1s;
    background-image: url("http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/190/1920x1080xa215189de5ef3506289c6c.jpg");
    background-size: cover;
    background-position: center;
  }

  &:nth-child(2) {
    animation-delay: 2s;
    background-image: url("http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/198/1920x1080x325f3e657baa60cfc6eedf.jpg");
    background-size: cover;
    background-position: center;
  }

  &:nth-child(3) {
    animation-delay: 5s;
    background-image: url("http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/202/1920x1080xeb6511cfd196cb5cbf0373.jpg");
    background-size: cover;
    background-position: center;
  }

  &:nth-child(4) {
    left: 0%;
    animation-delay: 8s;
    background-image: url("http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/211/1920x1080x7bcd564ca8d55a751d171d.jpg");
    background-size: cover;
    background-position: center;
  }

  p {
    font-family: Comfortaa;
    font-size: 70px;
    text-align: center;
    display: inline-block;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
}

@keyframes slide {
  0% {
    left: 100%;
    width: 100%;
  }
  5% {
    left: 0%;
  }
  25% {
    left: 0%;
  }
  30% {
    left: -100;
    width: 100%;
  }
  30.0001% {
    left: -100%;
    width: 0%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
}
</style>