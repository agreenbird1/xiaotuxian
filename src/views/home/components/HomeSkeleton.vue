<template>
  <div class="home-skeleton">
    <!-- 传入的这个 bg 可以使当前骨架贴合实际应用的场景，看起来更舒畅 -->
    <div class="item" v-for="i in 4" :key="i" :style="{ backgroundColor: bg }">
      <Skeleton bg="#e4e4e4" width="306px" height="290px" animated />
      <Skeleton bg="#e4e4e4" width="160px" height="24px" animated />
      <Skeleton bg="#e4e4e4" width="120px" height="24px" animated />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSkeleton',
  props: {
    bg: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style scoped lang='less'>
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    .skeleton ~ .skeleton {
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>
