<template>
<div>
  <div>
    <input type="text" placeholder="请输入消息" v-model="msg">
    <button @click="handleSendBtnClick">发送</button>
  </div>
</div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      msg:"",
      username:"",
      msgList:[]
    }
  },
  methods:{}
}
</script>

<style scoped>

</style>
