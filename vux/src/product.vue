<template>
  <div id="product">
    product二级页面
    <button @click="addProduct">add</button>
  </div>
</template>

<script>
//抛出默认
export default{
  data(){//es6,键值形式
    return{
      msg:"nihao"
    }
  },
  methods:{//方法
    addProduct(){
      alert(this.msg)
    }
  }
}
</script>

<style>

</style>
