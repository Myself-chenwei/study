// 封装对应的API接口模块
import request from '../untils/request'
// 按需导出
export const getArticleListAPI = function(_page, _limit) {
  // 调用拿到结果要return出去
  return request.get('/articles',
    {
      // 请求参数
      params: {
        _page: _page,
        _limit: _limit
      }
    }
  )
}
