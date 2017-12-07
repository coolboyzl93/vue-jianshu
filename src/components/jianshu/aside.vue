<template>
  <div class="aside">
    <div class="board">
      <a  v-for="(board, index) in boards" :key="index" :href="board.linkHref" target="_blank">
        <img :src="board.imgUrl" alt="">
      </a>
    </div>
    <!-- 首页右侧下载提示 -->
    <a class="col-xs-8 download" href=""
    @mouseover="toggleQR()"
    @mouseout="toggleQR()">
      <img class="qrcode" src="../../assets/qrcodejianshu.png" alt="">
      <div class="info">
        <div class="title">
          {{downloadTitle}}
          <i class="fa fa-chevron-right"></i>
        </div>
        <div class="description">随时随地发现和创作内容</div>
      </div>
    </a>
    <img class="hover-qrcode" v-if="hoverQR" src="../../assets/qrcodejianshu.png" alt="">
    <!-- 简书日报 -->
    <div class="jianshu-daily">
      <div class="title">
        {{jianshuDailyTitle}}
        <a href="/c/80e7d5d15e71?utm_medium=index-jianshu-daily-page&utm_source=desktop" target="_blank">查看往期</a>
      </div>
      <a class="note" v-for="(item, index) in dailyNotes" :key="index" 
      target="_blank" href="" >
        <img :src="item.imgUrl" alt="">
        <div class="note-title">
          {{item.title}}
        </div>
      </a>
    </div>
    <!-- 推荐作者 -->
    <div class="recommended-authors">
      <div class="title">
        <span>推荐作者</span>
        <a class="page-change">
          <i class="fa fa-refresh">换一批</i>
        </a>
      </div>
      <ul class="list">
        <li v-for="(author, index) in authorList" :key="index">
          <a class="avatar" href="">
            <img :src="author.avatar" alt="">
          </a>
          <a class="follow" href="">
            <i class="fa fa-plus"></i>
            关注
          </a>
          <a class="name" href="">{{author.name}}</a>
          <p>写了{{author.infoZi}}k字 · {{author.infoLike}}k喜欢</p>
          
        </li>
      </ul>
      <a class="find-more" href="/recommendations/users?utm_source=desktop&utm_medium=index-users" target="_blank">
        查看全部
        <i class="fa fa-chevron-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
import aside1 from '../../assets/aside1.png'
import aside2 from '../../assets/aside2.png'
import aside3 from '../../assets/aside3.png'
import aside4 from '../../assets/aside4.png'
import aside5 from '../../assets/aside5.png'
export default {
  name: 'findAside',
  data () {
    return {
      boards: [
        {linkHref: '', imgUrl: aside1},
        {linkHref: '', imgUrl: aside2},
        {linkHref: '', imgUrl: aside3},
        {linkHref: '', imgUrl: aside4},
        {linkHref: '', imgUrl: aside5}
      ],
      downloadTitle: '下载简书手机App',
      jianshuDailyTitle: '简书日报',
      dailyNotes: [
        {title: '茶点故事18——我年龄已经开始大了，可我依然不成功', imgUrl: 'http://upload-images.jianshu.io/upload_images/619393-2f597a5d001c9345.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'},
        {title: '张雷的故事，一个看似Loser的神奇之旅', imgUrl: 'http://upload-images.jianshu.io/upload_images/619393-2f597a5d001c9345.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'}
      ],
      authorList: [
        {
          avatar: '//upload.jianshu.io/users/upload_avatars/6287/06c537002583.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
          name: '刘欣',
          infoZi: 408.4,
          infoLike: 2.2
        },
        {
          avatar: '//upload.jianshu.io/users/upload_avatars/6287/06c537002583.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
          name: '云飞扬',
          infoZi: 1408.4,
          infoLike: 22.2
        }
      ],
      hoverQR: false
    }
  },
  methods: {
    toggleQR () {
      this.hoverQR = !this.hoverQR
      console.log(1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './aside.scss';
  .hover-qrcode {
    position: absolute;
    width: 50%;
    top: 180px;
    left: 80px;
  }
</style>


