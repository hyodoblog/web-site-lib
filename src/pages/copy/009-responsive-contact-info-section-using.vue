<template lang="pug">
  .body
    .contact-info
      .card
        font-awesome-icon.icon(:icon="['fas','envelope']")
        .card-content
          h3 Email
          span email@address.com
      .card
        font-awesome-icon.icon(:icon="['fas','phone']")
        .card-content
          h3 Phone Number
          span +00000000000
      .card
        font-awesome-icon.icon(:icon="['fas','map-marker-alt']")
        .card-content
          h3 Location
          span United States
</template>

<script>
export default {
  head: {
    titleTemplate: "009-responsive-contact-info-section-using",
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
.body {
  height: 100vh;
  background: url("~assets/images/copy/009-responsive-contact-info-section-using/bg.jpg")
    no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
}

.contact-info {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .card {
    position: relative;
    flex: 1;
    max-width: 300px;
    height: 140px;
    background-color: #444;
    margin: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      font-size: 32px;
      color: #ea8685;
      transition: 0.3s linear;
    }

    &:hover .icon {
      transform: scale(4);
      opacity: 0;
    }

    h3,
    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 16px;
      opacity: 0;
    }

    h3 {
      top: 20px;
      text-transform: uppercase;
      color: #ea8685;
    }

    &:hover h3 {
      opacity: 1;
      top: 46px;
      transition: 0.3s linear 0.3s;
    }

    &:hover span {
      opacity: 1;
      bottom: 46px;
      transition: 0.3s linear 0.3s;
    }

    span {
      bottom: 20px;
      color: #fff;
      font-weight: 500;
    }
  }
}

@media screen and (max-width: 900px) {
  .contact-info .card {
    flex: 100%;
    max-width: 500px;
  }
}
</style>
