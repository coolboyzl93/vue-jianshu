<template>
  <div class="side-tool">
    <ul>
      <li>
        <a href="#" class="function-button" v-if="scrollShowTool">
          <i class="fa fa-angle-up"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sideTool',
  data () {
    return {
      scrollShowTool: false
    }
  },
  methods: {
    handleScroll () {
      this.scrollShowTool = window.scrollY > 50
      // console.log(window.scrollY)
    },
    ready () {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  created () {
    this.ready()
  }
}
</script>

<style lang="scss" scoped>
  .side-tool {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 101;
    &>ul>li{
      border: 1px solid #dcdcdc;
      border-bottom: none;
      background-color: #fff;
      transition: .1s ease-in;
      -webkit-transition: .1s ease-in;
      -moz-transition: .1s ease-in;
      -o-transition: .1s ease-in;
      -ms-transition: .1s ease-in;

      &:last-child {
        border-bottom: 1px solid #dcdcdc;
      }
      .function-button {
        cursor: pointer;
        width: 50px;
        height: 50px;
        text-align: center;
        display: block;
        position: relative;

        i {
          top:10px;
          left:15px;
          position: absolute;
          font-size: 30px;
          display: block;
        }
      }
    }
  }
</style>


