<template>
  <footer id="footer" class="container">
    <div class="row">
      <div class="footer-main col-xs-17">
        <a :href="foot.footHref" v-for="foot in footerInfo" :key="foot.text">
          {{foot.text}}
          <em> · &nbsp</em>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'jianshuFooter',
  data () {
    return {
      footerInfo: [
        {footHref: '', text: '关于简书'},
        {footHref: '', text: '联系我们'},
        {footHref: '', text: '加入我们'},
        {footHref: '', text: '简书出版'},
        {footHref: '', text: '品牌与徽标'},
        {footHref: '', text: '帮助中心'},
        {footHref: '', text: '合作伙伴'}
      ]
    }
  }
}
</script>

<style lang="scss">
  .container {
    // 响应式
    width: 960px;
    // height: 100px;
    padding-left: 15px;
    padding-right: 15px;
  }

  footer {
    padding-bottom: 15px;
    .row {
      padding-top: 25px;
      position: relative;
    }

    &>.row>.footer-main {
      padding-right: 0;
      font-size: 13px;
      color: #969696;
      float: none;
      // 响应式
      width: 70.83333%;
      position: relative;
      min-height: 1px;
      padding-left: 15px;
      padding-right: 15px;
      a {
        font-size: 13px;
        color: #969696;
        display: inline-block;
        &:last-child>em {
          display: none;
        }
      }
    }
  }
  // 响应式
  // .col-xs-17 {
  //   width: 70.83333%;
  //   position: relative;
  //   min-height: 1px;
  //   padding-left: 15px;
  //   padding-right: 15px;
  // }
  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
</style>


