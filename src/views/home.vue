<template>
  <div>
    <div style="position: fixed;top: 0;"><span>
   您的ID是： {{ username }}
  </span></div>
    <br>
    <div>
      <ul>
        <li
            v-for="item of msgList"
            :key="item.id"
        >
          <p>
            <span>{{ item.user }}</span>
            <span>{{ new Date(item.dateTime) }}</span>
          </p>
          <p>
            消息：<span>{{ item.msg }}</span>
          </p>
        </li>
      </ul>
      <input type="text" placeholder="请输入消息" v-model="msg">
      <button @click="handleSendBtnClick">发送</button>
    </div>
  </div>
</template>

<script>
const ws = new WebSocket('ws://localhost:8000');

export default {
  name: "home",
  data() {
    return {
      msg: "",
      username: "",
      msgList: []
    }
  },
  methods: {
    handleSendBtnClick() {
      const msg = this.msg;
      if (!msg.trim().length) {
        alert("请输入发送的消息")
        return;
      }
      ws.send(JSON.stringify(
          {
            id: new Date().getTime(),
            user: this.username,
            dateTime: new Date().getTime(),
            msg: this.msg
          }
      ))
    },
    handleWsOpen(e) {
      console.log('Websocket open', e)
    },
    handleWsClose(e) {
      console.log('Websocket close', e)
    },
    handleWsError(e) {
      console.log('Websocket error', e)

    },
    handleWsMessage(e) {
      // const msg = JSON.parse(e.data);
      console.log(e.data);

    }

  },
  mounted() {
    this.username = localStorage.getItem("username");
    if (!this.username) {
      this.$router.push('/')
    }

    ws.addEventListener('open', this.handleWsOpen.bind(this), false)
    ws.addEventListener('close', this.handleWsClose.bind(this), false)
    ws.addEventListener('error', this.handleWsError.bind(this), false)
    ws.addEventListener('message', this.handleWsMessage.bind(this), false)


  }
}
</script>

<style scoped>

</style>
