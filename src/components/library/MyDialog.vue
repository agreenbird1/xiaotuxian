<template>
  <div class="xtx-dialog" :class="{ fade }" v-show="visible">
    <div class="wrapper" :class="{ fade }">
      <div class="header">
        <h3>{{ title }}</h3>
        <a
          @click="closeDialog()"
          href="JavaScript:;"
          class="iconfont icon-close-new"
        ></a>
      </div>
      <div class="body">
        <!-- 内容 -->
        <slot />
      </div>
      <!-- 按钮区 -->
      <div class="footer"><slot name="footer" /></div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
export default {
  name: 'MyDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    // 控制弹出层的显示和隐藏
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const fade = ref(false)
    // 根据使用者传递的visible来显示控制弹出层显示
    watch(() => props.visible, (newVal) => {
      setTimeout(() => {
        fade.value = newVal
      }, 0)
    }, { immediate: true })
    const closeDialog = () => {
      emit('update:visible', false)
    }
    return { fade, closeDialog }
  }
}
</script>
<style scoped lang="less">
.xtx-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8887;
  background: rgba(0, 0, 0, 0);
  &.fade {
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    width: 600px;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    opacity: 0;
    &.fade {
      transition: all 0.4s;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .body {
      max-height: 400px;
      overflow-y: auto;
      padding: 20px 40px;
      font-size: 16px;
      .icon-warning {
        color: @priceColor;
        margin-right: 3px;
        font-size: 16px;
      }
    }
    .footer {
      text-align: center;
      padding: 10px 0 30px 0;
    }
    .header {
      position: relative;
      height: 70px;
      line-height: 70px;
      padding: 0 20px;
      border-bottom: 1px solid #f5f5f5;
      h3 {
        font-weight: normal;
        font-size: 18px;
      }
      a {
        position: absolute;
        right: 25px;
        top: 25px;
        font-size: 24px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #999;
        &:hover {
          color: #666;
        }
      }
    }
  }
}
</style>
