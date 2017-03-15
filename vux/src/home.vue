<template>
  <div id="home">
  <!-- 二级导航 -->
     <Hello></Hello>
     <Navs></Navs>
     <Content></Content>
  </div>
</template>

<script>
//引入.vue文件
import Hello from './components/Hello'
import Navs from './components/nav'
import Content from './components/content'

export default {
  components: {//注册
    Hello,
    Navs,
    Content
  }
}
</script>

<style>

</style>
