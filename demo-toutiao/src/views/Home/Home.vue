<template>
  <div class="home-container">
    <van-nav-bar title="标题" fixed/>
    <van-pull-refresh v-model="isLoading" :disabled="finished" success-text="刷新成功" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ArticleInfo v-for="item in artList"
                     :key="item.id"
                     :title="item.title"
                     :author="item.aut_name"
                     :commentNum="item.comm_count"
                     :publishDate="item.pubdate"
                     :cover="item.cover"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '../../api/articleAPI'
import ArticleInfo from '../../components/Article/ArticleInfo'

export default {
  name: 'Home',
  data() {
    return {
      // 请求的页码
      page: 1,
      // 请求每一页最多能有多少文章
      limit: 10,
      artList: [],
      // 是否正在加载下一页数据，如果loading为true, 则不会反复触发load事件
      // 每当下一页数据请求回来之后，千万要记得，把loading从true改为false
      loading: true,
      // 所有数据是否加载完毕了，如果没有更多数据了，一定要把finished改成true
      finished: false,
      // 是否下拉
      isLoading: false
    }
  },
  methods: {
    /*  async initArrayList() {
        const { data: res } = await request.get('/articles',
          {
            // 请求参数
            params: {
              _page: this.page,
              _limit: this.limit
            }
          }
        )
        console.log(res)
      }
    }, */
    // 判断是否下拉isRefresh
    async initArrayList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      if (isRefresh) {
        this.artList = [...res, ...this.artList]
        this.isLoading = false
      } else {
        // 获取的第二页数据不能覆盖第一页的数据，应该两页数据进行拼接，使用const arr =[...arr1,...arr2]方法
        this.artList = [...this.artList, ...res]
        this.loading = false
      }
      // 判断数组中的最后一组是否还有数据
      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad() {
      // 上拉的时候到底部时页数加1，再次调用函数获取第二页的数据
      this.page++
      // 请求数据
      this.initArrayList()
    },
    onRefresh() {
      this.page++
      // 判断是否下拉了，下拉了则为true
      this.initArrayList(true)
    }
  },
  created() {
    this.initArrayList()
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;

  //使用定制主题修改
  /* .van-nav-bar {
     background-color: #07bfe;

     /deep/ .van-nav-bar__title {
       color: white;
     }
   }*/
}
</style>
