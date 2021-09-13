<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" class="thumb" v-if="cover.type===1">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type===3">
          <img :src="cover.images[0]" alt="" class="thumb">
          <img :src="cover.images[1]" alt="" class="thumb">
          <img :src="cover.images[2]" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 {{ author }} &nbsp;&nbsp; {{ commentNum }}评论 &nbsp;&nbsp; 发布日期 {{ publishDate }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross"/>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  // 自定义属性
  props: {
    // 标题
    title: {
      default: '',
      type: String
    },
    // 作者
    author: {
      default: '',
      type: String
    },
    // 评论数
    commentNum: {
      default: '',
      // 可以使用数组来定义多个类型，也就是说这个属性可以是数组中的类型之一
      type: [String, Number]
    },
    // 发布日期
    publishDate: {
      default: '',
      type: String
    },
    // 封面图片
    cover: {
      // 当属性类为对象时，默认值是一个函数
      default: function() {
        return { type: 0 }
      },
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
