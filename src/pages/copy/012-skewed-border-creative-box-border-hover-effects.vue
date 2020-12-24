<template lang="pug">
  .body
    .container
      .box.mb-12(v-for="item in items")
        .content
          h2  {{ item.title }}
          h3 {{ item.subTitle }}
          p {{ item.describe }}
          nuxt-link(to="#") Read More
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: '01',
          subTitle: 'Service One',
          describe:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: '02',
          subTitle: 'Service Two',
          describe:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: '03',
          subTitle: 'Service Three',
          describe:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: '04',
          subTitle: 'Service Four',
          describe:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
    }
  },
  head: {
    titleTemplate: '012-skewed-border-creative-box-border-hover-effects',
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #060c21;
}

.container {
  position: relative;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-template-rows: auto;
  grid-gap: 0 40px;

  .box {
    position: relative;
    height: 400px;
    background: #060c21;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      transform: skew(2deg, 2deg);
      background: #fff;
      z-index: -1;
    }

    .content {
      position: relative;
      padding: 20px;

      h2 {
        position: absolute;
        top: -60px;
        right: 20px;
        font-size: 10em;
        color: rgba(255, 255, 255, 0.05);
        transition: 0.5s;
      }

      h3 {
        margin: 0 0 10px;
        font-size: 24px;
        font-weight: 500;
        color: #fff;
      }

      p {
        color: #fff;
        font-size: 16px;
      }

      a {
        position: relative;
        margin-top: 20px;
        padding: 10px 20px;
        text-decoration: none;
        border: 1px solid #fff;
        display: inline-block;
        color: #fff;
        transition: 0.5s;
        transform: translateY(-40px);
        opacity: 0;
        visibility: hidden;

        &:hover {
          color: #000;
          background: #fff;
        }
      }
    }

    &:hover .content {
      h2 {
        top: -140px;
      }

      a {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
