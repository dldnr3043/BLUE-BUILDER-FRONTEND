<template>
    <div class="sidebar">
    <div class="sidebar-header">
      <button @click="moveChatbotListPage">Chatbot List</button>
    </div>
    <div class="sidebar-content">
      <ul>
        <li><a href="#">메뉴 1</a></li>
        <li><a href="#">메뉴 2</a></li>
        <li><a href="#">메뉴 3</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      moveChatbotListPage: function() {
        this.$router.push('/main/bot/botList')
      }
    }
  }
</script>

<style>
.sidebar {
  width: 200px;
  height: 100%;
  background-color: white;
  border: 1px solid #DDD;
  color: black;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 10px;
  height:50px;
  text-align: center;
  background-color: white;
  border-bottom: 1px solid #DDD;
}

.sidebar-content {
  flex-grow: 1;
  padding: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: white;
}
</style>