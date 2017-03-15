<template>
  <div class="content">
    <!-- 二级路由的显示区域 -->
    <router-view></router-view>
    <button @click="loginout">退出</button>
  </div>
</template>

<script>
export default {
  methods:{
    loginout:function(){
      this.$router.go('/login')
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>
<!-- <style scoped>作用域 。只限制在当前场合内使用，解决重名引起的样式冲突-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>/* 假如没有scoped，app.vue中重名.content/.nav文件，也会加下面的样式 */
h1 {
  color: #42b983;
}
.content{
  width: 60%;
  float: left;
  height: 400px;
  background: pink;
}
</style>
