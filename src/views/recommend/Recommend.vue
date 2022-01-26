<template>
  <div class="recommend" v-loading="loading">
    <div class="slide-wrapper">
      <div class="slide-content">
        <slider v-if="sliders.length" :sliders="sliders" />
      </div>
    </div>
    <div class="recommend-list">
      <h1 class="list-title" v-show="!loading">HOT的东西</h1>
      <ul>
        <li
          v-for="item in albums"
          class="item"
          :key="item.id"
          @click="selecteItem(item)"
        >
          <div class="icon">
            <img :src="item.pic" alt="" width="60" height="60" />
          </div>
          <div class="text">
            <h2 class="name">{{ item.name }}</h2>
            <p class="title">{{ item.title }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/base/slider/Slider';
import { getRecommend } from '@/service/recommend.js';
export default {
  name: 'Recommend',
  components: {
    Slider
  },
  data() {
    return {
      sliders: [],
      albums: []
    };
  },
  computed: {
    loading() {
      return !this.sliders.length && !this.albums.length;
    }
  },
  async created() {
    const result = await getRecommend();
    setTimeout(() => {
      this.sliders = result.sliders;
      this.albums = result.albums;
    }, 5000);
  }
};
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
  .slide-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 40%;
    .slide-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }
    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;
      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;
      }
    }
  }
}
</style>
