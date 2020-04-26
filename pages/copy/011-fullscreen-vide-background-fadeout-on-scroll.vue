<template lang="pug">
  .body
    section
      video(src="https://vod-progressive.akamaized.net/exp=1587918406~acl=%2A%2F1646772255.mp4%2A~hmac=40d94a4e99503e86d0d9be65908256dc069d6e0201cb7081d6892d0bf48d55e7/vimeo-prod-skyfire-std-us/01/2944/15/389724705/1646772255.mp4" autoplay="" muted="" loop="")
    section
      .content
        h2 Fadeout Video Background On Scroll
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
export default {
  mounted() {
    let video = document.querySelector("video")
    window.addEventListener("scroll", () => {
      let value = 1 + window.scrollY / -600
      video.style.opacity = value
    })
  },
  head: {
    titleTemplate: "011-fullscreen-vide-background-fadeout-on-scroll",
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
  background: #000;
}

section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 100px;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  h2 {
    position: relative;
    color: #fff;
    font-size: 3em;
  }

  p {
    position: relative;
    color: #fff;
    font-size: 1.2em;
  }
}
</style>
