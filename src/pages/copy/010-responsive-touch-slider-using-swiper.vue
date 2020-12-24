<template lang="pug">
  .body
    .swiper-container
      .swiper-wrapper
        .swiper-slide(v-for="(item, index) in items" :key="index")
          .img-box
            img(:src="item.imageUrl")
          .details
            h3 {{ item.title }}
              br
              span {{ item.describe }}
      .swiper-pagination
</template>

<script>
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'

export default {
  data() {
    return {
      items: [
        {
          imageUrl:
            'http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/132/1920x1080xd8e99896eef0f5ef3d472b.jpg',
          title: 'John Doe',
          describe: 'Web Designer',
        },
        {
          imageUrl:
            'http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/134/1920x1080xfd2a3d9bda937577183f2a.jpg',
          title: 'John Doe',
          describe: 'Web Designer',
        },
        {
          imageUrl:
            'http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/57/1920x1080x05595ba979e2bf2ce97014.jpg',
          title: 'John Doe',
          describe: 'Web Designer',
        },
        {
          imageUrl:
            'http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/129/1920x1080xb207116b68e633b49d5098.jpg',
          title: 'John Doe',
          describe: 'Web Designer',
        },
        {
          imageUrl:
            'http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/132/1920x1080xd8e99896eef0f5ef3d472b.jpg',
          title: 'John Doe',
          describe: 'Web Designer',
        },
      ],
    }
  },
  head: {
    titleTemplate: '010-responsive-touch-slider-using-swiper',
  },
  mounted() {
    new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 500,
        modifier: 5,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      paginationClickable: true,
      loop: true,
      speed: 1000,
      autoplay: true,
    })
  },
}
</script>

<style lang="scss" scoped>
* {
}
.body {
  background: #262626;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 380px;
  background: #fff;

  .img-box {
    width: 100%;
    height: 300px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details {
    box-sizing: border-box;
    font-size: 20px;
    padding: 20px;

    h3 {
      margin: 0;
      padding: 0;
      font-size: 20px;
      text-align: center;
      line-height: 20px;

      span {
        font-size: 16px;
        color: #f44336;
      }
    }
  }
}
</style>
