<template>
<!-- 导航 -->
  <div class="nav">
    <ul>
      <li><a v-link="{path:'/home/index'}">index.html</a></li>
      <li><a v-link="{path:'/home/list'}">list.html</a></li>
      <li><a v-link="{path:'/home/product'}">product.html</a></li>
    </ul>
  </div>
</template>

<script>
export default {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.nav{
  width: 40%;
  float: left;
  background: gold;
}
.nav ul{
   list-style: none;
}
</style>
