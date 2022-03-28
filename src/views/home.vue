<template>
<div>
  <div>
    <ul>
      <li
      v-for="item of msgList"
      :key="item.id"
      >
        <p>
          <span>{{item.user}}</span>
          <span>{{new Date(item.dateTime) }}</span>
        </p>
        <p>
          消息：<span>{{item.msg}}</span>
        </p>
      </li>
    </ul>
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
  methods:{},
  mounted() {
    this.username = localStorage;
  }
}
</script>

<style scoped>

</style>
