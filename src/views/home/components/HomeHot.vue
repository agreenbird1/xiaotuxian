<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过" ref="target">
    <transition>
      <ul ref="pannel" class="goods-list" v-if="goods.length">
        <li v-for="item in goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
      <HomeSkeleton v-else />
    </transition>
  </HomePanel>
</template>

<script>
import { getLazyData } from '@/hooks'
import HomePanel from './HomePanel.vue'
import HomeSkeleton from './HomeSkeleton.vue'
import { findHot } from '@/api/home'
export default {
  name: 'HomeNew',
  components: { HomePanel, HomeSkeleton },
  setup () {
    // 数据懒加载
    const { result: goods, target } = getLazyData(findHot)
    return {
      goods,
      target
    }
  }
}
</script>

<style scoped lang='less'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
