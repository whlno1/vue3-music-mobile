<template>
  <div class="home">
    <m-header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue'

export default {
  name: 'Home',
  components: {
    MHeader: Header
  }
}
</script>
