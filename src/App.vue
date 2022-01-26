<template>
  <m-header></m-header>
  <tab></tab>
  <router-view></router-view>
</template>
<script>
import Header from '@/components/header/Header'
import Tab from '@/components/tab/Tab'
export default {
  name: 'App',
  components: {
    MHeader: Header,
    Tab
  }
}
</script>
<style lang="scss" scoped></style>
