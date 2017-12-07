<template>
  <div class="navbar-jianshu">
    <!-- 两侧留白 -->
    <div class="limit-width clearfix">
      <!-- 导航右侧三个,因为向右浮动必须放在向左浮动元素的前面才不会导致换行 -->
      <a class="btn-write">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        写文章
      </a>
      <div class="user" @mouseover="toggleUserMenu()" @mouseout="toggleUserMenu()">
        <a class="avatar">
          <img src="../../assets/avatar.jpg" alt="">
        </a>
        <i class="fa fa-caret-down" aria-hidden="true"></i>
        <hover-menu :menu-show="hoverAvatar" :current-menu="userMenu"></hover-menu>
      </div>
      <div class="style-mode">
        <a class="style-mode-btn" href="" @click.prevent="toggleModePanel()">
          <i class="fa fa-font" aria-hidden="true"></i>
        </a>
        <div class="mode-panel" v-if="modePanel">
          <div class="nightmode">
            <i class="fa fa-moon-o"></i>
            <span>夜间模式</span>
          </div>
          <div class="switch is-night">
            <a class="switch-btn" :class="{'active': modeBtns.isNight}" @click="toggleDayNight()">开</a>
            <a class="switch-btn" :class="{'active': !modeBtns.isNight}" @click="toggleDayNight()">关</a>
          </div>
          <hr>
          <div class="switch font-family">
            <a class="switch-btn font-song" :class="{'active': modeBtns.isSong}" @click="toggleSongHei()">宋体</a>
            <a class="switch-btn font-hei" :class="{'active': !modeBtns.isSong}" @click="toggleSongHei()">黑体</a>
          </div>
          <div class="switch">
            <a class="switch-btn" :class="{'active': modeBtns.isFan}" @click="toggleFanJian()">繁</a>
            <a class="switch-btn" :class="{'active': !modeBtns.isFan}" @click="toggleFanJian()">简</a>
          </div>
        </div>
      </div>
      <!-- 简书logo -->
      <router-link class="navbar-logo" to="/">
        <img src="../../assets/jianshulogo.png" alt="" width="55" height="26">
      </router-link>
      <!-- 导航中间块 -->
      <div class="nav-center">
        <ul class="navbar-nav clearfix">
          <li v-for="navTab in navTabs" :key="navTab.id" @click="activeNavTab(navTab.key)" @mouseover="showMsgMenu(navTab.key)" @mouseout="hideMsgMenu()">
            <router-link :class="{'active': activeKey === navTab.key}" to="">
              <i :class="navTab.icon"></i>
              <span class="navbar-nav-span">{{ navTab.text }}</span>
            </router-link>
            <hover-menu v-if=" navTab.key === 'navmsg'" :menu-show="hoverKey === 'navmsg'" :current-menu="msgMenu"></hover-menu>
          </li>
          <li class="nav-search">
            <form action="/search" method="get" accept-charset="UTF-8" target="_blank">
              <!-- ？？？？ -->
              <input type="hidden" value="√">
              <input type="text" name="q" placeholder="搜索" class="search-input" @focus="ToggleSearchTips()" @blur="ToggleSearchTips()">
              <a class="search-btn" :class="{'reverse': focusOnSearch}" href="http://">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
              <div class="navbar-search-tips" v-show="showTips">
                <div class="search-trending">
                  <div class="search-trending-header clearfix">
                    <span>热门搜索</span>
                    <a href="">
                      <i class="fa fa-repeat"></i>
                      换一批
                    </a>
                  </div>
                  <ul class="search-trending-tags-wrap">
                    <li>
                      <a href="" target="_blank">标签</a>
                    </li>
                  </ul>
                </div>
                <div class="search-recent">
                  <ul class="search-recent-item-wrap">
                    <li>
                      <a class="clearfix" href="" target="_blank">
                        <i class="fa fa-clock-o icon-search-history"></i>
                        <!-- 用户输入的搜索关键字 -->
                        <span>搜索详情</span>
                        <!-- 这里也使用了css中的before来添加动态叉号 -->
                        <i class="unfollow fa fa-times"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </li>
        </ul>
        <!-- <input type="search" name="" id="">
        <a><i></i></a> -->
      </div>
    </div>
  </div>
</template>

<script>
  import hoverMenu from './hoverMenu.vue'
  export default {
    name: 'navbar',
    data () {
      return {
        navTabs: [
          { text: '发现', icon: 'fa fa-compass', key: 'navfind' },
          { text: '关注', icon: 'fa fa-forumbee', key: 'navfollow' },
          { text: '消息', icon: 'fa fa-bell-o', key: 'navmsg' }
        ],
        msgMenu: [
          { text: '评论', icon: 'fa fa-commenting-o', key: 'menuComment' },
          { text: '简信', icon: 'fa fa-envelope-o', key: 'menuLetter' },
          { text: '投稿请求', icon: 'fa fa-upload', key: 'menuSubmission' },
          { text: '喜欢和赞', icon: 'fa fa-thumbs-o-up', key: 'menuPraise' },
          { text: '关注', icon: 'fa fa-user', key: 'menuFollow' },
          { text: '赞赏', icon: 'fa fa-usd', key: 'menuBounty' },
          { text: '其他消息', icon: 'fa fa-ellipsis-h', key: 'menuOther' }
        ],
        userMenu: [
          { text: '我的主页', icon: 'fa fa-user', key: 'menuHomePage' },
          { text: '收藏的文章', icon: 'fa fa-star', key: 'menuCollections' },
          { text: '喜欢的文章', icon: 'fa fa-heart', key: 'menuLikedArticles' },
          { text: '我的钱包', icon: 'fa fa-credit-card-alt', key: 'menuPurse' },
          { text: '设置', icon: 'fa fa-cog', key: 'menuSettings' },
          { text: '帮助与反馈', icon: 'fa fa-info-circle', key: 'menuHelps' },
          { text: '退出', icon: 'fa fa-sign-out', key: 'menuSignOut' }
        ],
        activeKey: 'navfind',
        hoverKey: '',
        hoverAvatar: false,
        showTips: false,
        modePanel: false,
        focusOnSearch: false,
        modeBtns: {
          isNight: false,
          isSong: false,
          isFan: false
        }
      }
    },
    methods: {
      activeNavTab (key) {
        this.activeKey = key
      },
      showMsgMenu (key) {
        this.hoverKey = key
      },
      hideMsgMenu () {
        this.hoverKey = ''
      },
      toggleUserMenu () {
        this.hoverAvatar = !this.hoverAvatar
      },
      ToggleSearchTips () {
        this.showTips = !this.showTips
        this.focusOnSearch = !this.focusOnSearch
      },
      toggleModePanel () {
        this.modePanel = !this.modePanel
      },
      loseFocus () {
        this.modePanel = false
      },
      toggleDayNight () {
        this.nightStyle()
        this.modeBtns.isNight = !this.modeBtns.isNight
        this.toggleModePanel()
      },
      toggleSongHei () {
        this.modeBtns.isSong = !this.modeBtns.isSong
        this.toggleModePanel()
      },
      toggleFanJian () {
        this.modeBtns.isFan = !this.modeBtns.isFan
        this.toggleModePanel()
      },
      nightStyle () {
        this.$emit('changeStyle')
        // window.document.querySelector('*').style.background = '#3F3F3F'
        // window.document.querySelector('.navbar-jianshu').style.background = '#3F3F3F'
        // window.document.querySelector('*').setAttribute('style', 'color: #fff!important')
      }
    },
    components: {
      hoverMenu
    }
  }
</script>

<style lang="scss" scoped>
  @import './nav.scss';
</style>