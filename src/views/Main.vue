<template>
  <a-layout id="components-layout-demo-top-side">
    <Header></Header>
<!--    <Main></Main>-->
    <router-view name="content"/>
    <Footer></Footer>
  </a-layout>
</template>


<script>
import Header from "@/components/layout/Layout-Header"
// import Main from "@/components/layout/Layout-Content"
import Footer from "@/components/layout/Layout-Footer"

export default {
  components:{Header,Footer},
  name: "test"
}
</script>

<style scoped>

</style>
