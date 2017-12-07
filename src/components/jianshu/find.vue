<template>
  <div class="container">
    <!-- <h1>woshi zhuye</h1> -->
    <div class="row">
      <div class="carousel slide"
      @mouseover="cancelInterval()"
      @mouseout="autoNext()">
        <div class="carousel-inner">
          <div class="item clearfix" v-for="(item, index) in slideItems" :key="'slide' + index" v-show="slideActive === index">
            <transition name="fade">
            <div class="banner" v-show="slideActive === index">
              <a target="_blank" href="">
                <img :src="item.imgSrc" alt="">
              </a>
            </div>
            </transition>
            <transition :name="slideUp ? 'slideup' : 'slidedown'" >
            <div class="banner" v-show="slideActive === index">
              <a target="_blank" href="">
                <img :src="index + 1 < 10 ? slideItems[index + 1].imgSrc : slideItems[index - 9].imgSrc " alt="">
              </a>
            </div>
            </transition>
            <transition :name="slideUp ? 'slideup' : 'slidedown'" >
            <div class="banner" v-show="slideActive === index">
              <a target="_blank" href="">
                <img :src="index + 2 < 10 ? slideItems[index + 2].imgSrc : slideItems[index - 8].imgSrc" alt="">
              </a>
            </div>
            </transition>
            <transition :name="gaoxiao" >
            <div class="banner" v-show="slideActive === index" style="position: absolute; right: 0;">
              <a target="_blank" href="">
                <img :src="yichu" alt="">
              </a>
            </div>
            </transition>
          </div>
        </div>
        <a class="left carousel-control" @click="previous()">
          <i class="fa fa-chevron-left"></i>
        </a>
        <a class="right carousel-control" @click="next()">
          <i class="fa fa-chevron-right"></i>
        </a>
      </div>
      <div class="main">
        <div class="recommend-collection">
          <a class="collection" href="" target="_blank"
          v-for="mainTag in mainTags" :key="mainTag.text">
            <img :src="mainTag.imgUrl" alt="64">
            <div class="name">{{mainTag.text}}</div>
          </a>
          <a class="more-hot-collection" target="_blank">
            更多热门专题
            <i class="fa fa-chevron-right"></i>
          </a>
        </div>
        <div class="split-line"></div>
        <list-container></list-container>
        <a class="read-more" @click="readMore()">阅读更多</a> 
      </div>
      <find-aside></find-aside>
    </div>
  </div>
</template>

<script>
import listContainer from './listContainer.vue'
import findAside from './aside.vue'
export default {
  name: 'Find',
  data () {
    return {
      slideItems: [
        // 后端数据
        {imgSrc: '//upload.jianshu.io/admin_banners/web_images/3932/40ae7d8a4ff6e539c64d9c40d9bd590a10221bd5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {imgSrc: '//upload.jianshu.io/admin_banners/web_images/3934/7450e05bd4d53684cd3c546f0896fd12f32c9687.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {imgSrc: '//upload.jianshu.io/admin_banners/web_images/3933/70f06f06891bce820639a5373f13dc8112378102.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {imgSrc: '//upload.jianshu.io/admin_banners/web_images/3937/9bee9e37143fb6ad7a9147a558aa5f43a098763c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {imgSrc: '//upload.jianshu.io/admin_banners/web_images/3928/99be321a8bde546d5105360fa883d9ae4e80c7c6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {imgSrc: '//upload.jianshu.io/admin_banners/web_images/3909/dbf84a43eee376d7f9c65eebfad3d367cc4afb70.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {imgSrc: '//upload.jianshu.io/admin_banners/web_images/3889/e54dd935ba164adff5b0ea8453023a66d6d223fa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {imgSrc: '//upload.jianshu.io/admin_banners/web_images/3935/0cfdfa048e4630f7322c16adc731c046c66ed680.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {imgSrc: '//upload.jianshu.io/admin_banners/web_images/3930/41d2b5ff2b6c5bd99f9eaead8c61a050e5aad898.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {imgSrc: '//upload.jianshu.io/admin_banners/web_images/3931/c6cf8684afe036bf6a276a8a7107850a2b185024.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'}
      ],
      slideActive: 0,
      slideInterval: undefined,
      mainTags: [
        // 后端数据
        {text: '读书', imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {text: '@IT·互联网', imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {text: '旅行·在路上', imgUrl: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {text: '社会热点', imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {text: '手绘', imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {text: '历史', imgUrl: '//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {text: '摄影', imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'}
      ],
      slideUp: true
    }
  },
  methods: {
    previous () {
      if (this.slideActive === 0) {
        this.slideActive = 9
      } else {
        this.slideActive -= 1
      }
      this.slideUp = false
    },
    next () {
      if (this.slideActive === 9) {
        this.slideActive = 0
      } else {
        this.slideActive += 1
      }
      this.slideUp = true
    },
    autoNext () {
      this.slideInterval = setInterval(() => {
        this.next()
      }, 2000)
    },
    cancelInterval () {
      clearInterval(this.slideInterval)
    }
  },
  computed: {
    yichu () {
      if (this.slideUp) {
        return this.slideItems[this.slideActive].imgSrc
      } else {
        return this.slideActive + 3 < 10 ? this.slideItems[this.slideActive + 3].imgSrc : this.slideItems[this.slideActive - 7].imgSrc
      }
    },
    gaoxiao () {
      return this.slideUp ? 'slideup2' : 'slidedown2'
    }
    //   if (this.slideAcitve + 3 < 10) {
    //     return this.slideItems[this.slideAcitve + 3].imgSrc
    //   } else {
    //     return this.slideItems[this.slideAcitve - 7].imgSrc
    //   }
    // }
  },
  created () {
    this.autoNext()
  },
  components: {listContainer, findAside}

}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: .5;
}
.slideup-enter-active, .slideup-leave-active, .slideup2-enter-active, .slideup2-leave-active,
.slidedown-enter-active, .slidedown-leave-active, .slidedown2-enter-active, .slidedown2-leave-active{
  transition: all .4s ease-in-out;
  // position: absolute;
  // right:0;
}
.slidedown2-enter-active, .slidedown2-leave-active{
  display: none;
}
.slideup-enter {
  // opacity: .5;
  transform: translateY(100%);
}
.slideup-enter-to{
  transform: translateY(0);
}
.slideup-leave-to {
  transition: transitionY(-100%);
}
.slideup2-enter {
  top:0;
}
.slideup2-enter-to {
  top: -136px;
}
.slideup2-leave-to {
  top: -136px;
}

.slidedown-enter {
  // opacity: .5;
  transform: translateY(-100%);
}
.slidedown-enter-to{
  transform: translateY(0);
}
.slidedown-leave-to {
  transition: transitionY(100%);
}
.slidedown2-enter {
  top: 136px;
}
.slidedown2-enter-to {
  top: 272px;
}
.slidedown2-leave-to {
  top: 272px;
}


  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 960px;

    .row {
      margin-left: -15px;
      margin-right: -15px;
      position: relative;
      .banner {
        display: inline-block;
        width: 33.333%;
      }

      .banner:first-child {
        width: 66.666%;
        float: left;
      }
      
      .left {
        left: 0;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        i {
          left: 10px;
        }
      }

      .right {
        right: 2px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        i {
          right:10px;
        }
      }
      .carousel-control {
        // opacity: 0;
        // transition: .1s ease-in;
        // -webkit-transition: .1s ease-in;
        // -moz-transition: .1s ease-in;
        // -o-transition: .1s ease-in;
        // -ms-transition: .1s ease-in;

        background-image: none;
        background-color: rgba(0,0,0,.4);
        height: 50px;
        width: 40px;
        top: 40%;

        i {
          // color: black;
          position: absolute;
          top: 50%;
          margin-top: -10px;
        }
      }
    }
    // 轮播
    .slide {
      margin-left: 15px;
      border-radius: 0 0 6px 6px;
      overflow: hidden;
      z-index: 1000;
      img {
        width: 100%;
        background-color: hsla(0,0%,71%,.2);
        &:hover {
          // CSS滤镜
          -webkit-filter: brightness(80%); /* Chrome, Safari, Opera */
          filter: brightness(80%);
        }
      }
    }

    .carousel, .carousel-inner {
      position: relative;
    }

    .carousel-inner {
      overflow: hidden;
      width: 100%;
      &>.item {
        position: relative;
      }
    }

    .main {
      padding-top: 40px;
      padding-right: 0;
      // 响应式设计
      float: left;
      margin-right: 0px;
      width: 66.66667%;
      position: relative;
      min-height: 1px;
      padding-left: 15px;

      .recommend-collection {
        margin-bottom: 20px;
        text-align: left;

        .collection {
          display: inline-block;
          margin: 0 18px 18px 0;
          min-height: 32px;
          background-color: #f7f7f7;
          border: 1px solid #dcdcdc;
          border-radius: 4px;
          vertical-align: top;
          overflow: hidden;

          img {
            width: 32px;
            height: 32px;
          }

          .name {
            display: inline-block;
            padding: 0 11px 0 6px;
            font-size: 14px;
          }
        }

        .more-hot-collection {
          display: inline-block;
          margin-top: 7px;
          font-size: 14px;
          color: #787878;
        }
      }

      .split-line {
        margin: -5px 0 15px;
        border-top: 1px solid #f0f0f0;
      }

      .read-more {
        width: 100%;
        border-radius: 20px;
        background-color: #a5a5a5;
      }
    }
  }
</style>
