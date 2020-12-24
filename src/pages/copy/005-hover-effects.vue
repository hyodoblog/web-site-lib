<template lang="pug">
  .body
    .loader
      span
      span
      span
      span
</template>

<script>
export default {
  name: 'HoverEffects',
  head: {
    titleTemplate: '005-hover-effects',
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: black;
}

.loader {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;

  &:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
  }

  span {
    position: absolute;
    display: block;

    &:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 40px;
      background: linear-gradient(90deg, transparent, #03e9f4);
      animation: animate1 1s linear infinite;
      animation-delay: 0s;
    }

    &:nth-child(2) {
      right: 0;
      top: -100%;
      width: 40px;
      height: 100%;
      background: linear-gradient(180deg, transparent, #03e9f4);
      animation: animate2 1s linear infinite;
      animation-delay: 0.5s;
    }

    &:nth-child(3) {
      bottom: 0;
      left: -100%;
      width: 100%;
      height: 40px;
      background: linear-gradient(90deg, transparent, #03e9f4);
      animation: animate3 1s linear infinite;
      animation-delay: 0s;
    }

    &:nth-child(4) {
      left: 0;
      top: 100%;
      width: 40px;
      height: 100%;
      background: linear-gradient(0deg, transparent, #03e9f4);
      animation: animate4 1s linear infinite;
      animation-delay: 0.5s;
    }
  }
}

@keyframes animate1 {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  100% {
    top: 100%;
  }
}
@keyframes animate3 {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
@keyframes animate4 {
  0% {
    top: 100%;
  }
  100% {
    top: -100%;
  }
}
</style>
