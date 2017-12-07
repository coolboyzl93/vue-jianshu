<template>
  <div class="home-container">
    <navbar></navbar>
    <router-view class="main-container"></router-view>
    <side-tool></side-tool>
    <jianshu-footer class="foooter"></jianshu-footer>
  </div>
</template>

<script>
import navbar from './nav.vue'
import jianshuFooter from './footer.vue'
import sideTool from './sideTool.vue'
// import '@/assets/allset.scss'
export default {
  name: 'JianShu',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    navbar,
    jianshuFooter,
    sideTool
  }
}
</script>

<style lang='scss'>
  @import '../../assets/allset.scss';
  @import '../../assets/grid.scss';
  .main-container {
    margin-top: 56px;
  }
  .home-cotainer {
    position: relative;
  }
  .foooter {
    display: block;
    max-height: 300px;
    position: relative;
    z-index: -1;
  }
  .night-style {
    background: #3F3F3F !important;
    color: #fff !important;
  }
</style>
