<template>
  <ul class="hover-menu" v-show="menuShow">
    <li v-for="item in hoverMenu" :key="item.key">
      <router-link to="/">
        <i :class="item.icon"></i>
        <span>{{ item.text }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'hoverMenu',
    props: ['menuShow', 'currentMenu'],
    data () {
      return {
        hoverMenu: this.currentMenu
      }
    }
  }
</script>
<style lang="scss">
  .hover-menu {
    width: 200px;
    margin-top: -1px;
    border-radius: 0 0 4px 4px;
    border-color: transparent;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    -webkit-filter: drop-shadow(0 2px 8px rgba(0,0,0,.1));
    position: absolute;
    top: 98%;
    left: 0;
    z-index: 2000;
    // display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    li:hover {
       background: #eee;
    }
    a {
      height: auto;
      padding: 10px 20px;
      line-height: 30px;
    }
    i {
      margin-right: 15px;
      font-size: 22px;
      color: #ea6f5a;
      vertical-align: middle;
    } 
  }
</style>
