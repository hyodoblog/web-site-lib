<template lang="pug">
  .body
    header
      h1 Parallax Effect
      p Pure CSS // 
</template>

<script>
export default {
  name: "pure-css-parallax-scrolling",
  head: {
    titleTemplate: "003-pure-css-parallax-scrolling",
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
  color: white;
  margin: 0px;
  padding: 0px;
  perspective: 1px;
  transform-style: preserve-3d;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: "Shadows Into Light", cursive;
}

header {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 30vw 0 5vw;
  position: relative;
  transform-style: inherit;
  width: 100vw;

  h1 {
    margin-top: -100px;
  }

  &::before {
    background: 50% 50% / cover;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    background-image: url("http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/156/1920x1080xca044d09c1466e92ddcf16.jpg");
    background-size: cover;
    transform-origin: center center 0;
    transform: translateZ(-1px) scale(2);
    z-index: -1;
    min-height: 100vh;
  }

  * {
    font-weight: normal;
    letter-spacing: 0.2em;
    text-align: center;
    margin: 0;
    padding: 1em 0;
  }
}
</style>