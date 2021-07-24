<template>
  <div id="app">
    <main-header class="main-header"/>
    <view-m/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px 5px 5px 5px;
  height: 57px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      //color: #42b983;
      color: #335d9d;
    }
  }
}
.main-header {
  box-shadow: 1px 1px 10px #3e3e3e;
  position: relative;
  //margin-top: 5px;
  margin-bottom: 5px;
  z-index: 9999;
}
</style>
<script>
import MainHeader from "@/components/layout/Main-Header";
import ViewM from "@/views/Main";
export default {
  components:{ViewM,MainHeader},
  name: "test",
}
</script>
