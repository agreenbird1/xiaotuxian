/<template>
  <div class="goods-tabs">
    <nav>
      <a
        @click="activeName = 'goodsDetails'"
        :class="{ active: activeName === 'goodsDetails' }"
        href="javascript:;"
        >商品详情</a
      >
      <a
        @click="activeName = 'goodsComments'"
        :class="{ active: activeName === 'goodsComments' }"
        class=""
        href="javascript:;"
        >商品评价<span>(500+)</span></a
      >
    </nav>
    <!-- 切换内容的地方 -->
    <!-- 使用动态组件进行渲染 -->
    <component :is="activeName"></component>
  </div>
</template>

<script>
import { ref } from 'vue'
import GoodsComments from './GoodsComments.vue'
import GoodsDetails from './GoodsDetails.vue'
export default {
  name: 'GoodsTabs',
  components: { GoodsComments, GoodsDetails },
  setup () {
    const activeName = ref('goodsDetails')
    return {
      activeName
    }
  }
}
</script>

<style scoped lang='less'>
.goods-tabs {
  min-height: 600px;
  background: #fff;
  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;
      > span {
        color: @priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
      &:first-child {
        border-right: 1px solid #f5f5f5;
      }
      &.active {
        &::before {
          content: "";
          position: absolute;
          left: 40px;
          bottom: -1px;
          width: 72px;
          height: 2px;
          background: @xtxColor;
        }
      }
    }
  }
}
</style>
