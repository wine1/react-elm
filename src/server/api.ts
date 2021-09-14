import server from './server'

class API extends server {
  async getshop(params = {}) {
    try {
      let res = await this.axios('get', 'shopping/restaurant/1', params)
      if (res) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  }

  /** 获取食品列表 */
  async getFoodsList(params = {}) {
    try {
      let res = await this.axios('get', 'shopping/v2/menu', params)
      if (res) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  }

  /** 获取评价信息 */
  async getCommentList(restaurant_id: number, params = {}) {
    try {
      let res = await this.axios('get', `ugc/v2/restaurants/${restaurant_id}/ratings`, params)
      if (res) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export default new API()
