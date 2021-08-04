<template>
  <a-layout-header :class="$store.state.theme === 'dark' ? 'header header-custom-dark' : 'header header-custom'">
    <div class="logo"/>
    <a-menu
        :theme="$store.state.theme"
        mode="horizontal"
        :default-selected-keys="['1']"
        class="menu-custom"
        :style="{ lineHeight: '64px'}"
    >
      <a-menu-item key="1">
        <router-link to="/about">
          概览
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/server">
          服务器
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        数据库
      </a-menu-item>
      <a-menu-item key="4">
        运维
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
name: "Layout-Header",
  data(){
    return{
    }
  },
  computed(){

  },
  methods:{
  }
}
</script>

<style scoped>
  #components-layout-demo-top-side .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
  .menu-custom {
    background-image: linear-gradient(rgb(32, 139, 221), rgb(11, 89, 205));
    background-color: rgb(17, 94, 177);
  }
  .header-custom{
    background-image: linear-gradient(rgb(32, 139, 221), rgb(11, 89, 205));
    background-color: rgb(17, 94, 177);
  }
  .header-custom-dark{
    background-image: linear-gradient(rgb(32, 139, 221), rgb(11, 89, 205));
    background-color: rgb(17, 94, 177);
  }
  .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-image: linear-gradient(rgb(32, 134, 216), rgb(11, 84, 200));
    box-shadow: 0 1px 16px -5px #333333 inset;
    background-color: rgb(17, 94, 177);
    color: #64bcff;
  }
</style>
