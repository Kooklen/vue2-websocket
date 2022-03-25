<template>
<div>
  <div>
    <input type="text" v-model="username">
    <button @click="login">登录啦</button>
  </div>
</div>
</template>

<script>
import router from "@/router";

export default {
  name: "login",
  data(){
    return{
      username:""
    }
},
  methods:{
    login(){
      if(this.username.trim().length<6){
        alert("请输入至少六位用户名")
        return
      }else{
        localStorage.setItem('username',this.username)
        router.push('home')
      }
    }
  }
}
</script>

<style scoped>

</style>
