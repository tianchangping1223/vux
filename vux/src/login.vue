<template>
  <div id="login">
    <form>
      <input type="text" name="username"/>
      <input type="password" name="password"/>
      <input type="button" value="提交" @click="login"/>
    </form>
  </div>
</template>

<script>
//抛出默认
export default{
  methods:{
    login:function(){
      //router.go()//console.log(this)//router= this.$router
      this.$router.go("/home/index")//跳转页面
    }
  }
}
</script>

<style>

</style>
