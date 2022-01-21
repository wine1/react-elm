import server from './server'
class NewApi extends server {
  /** 登陆 */
  async login(params: any = {}) {
    try {
      let res = await this.axios('post', `/api/user/login`, { ...params, isNewApi: true })
      if (res) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  }

  /** 获取分类列表 */
  async getcategory(params: any = {}) {
    try {
      let res = await this.axios('get', `/api/shopping/getCategoryList`, { ...params, isNewApi: true })
      if (res) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  }

  /** 获取商铺列表 */
  async getShop(params: any = {}) {
    try {
      let res = await this.axios('get', `/api/shopping/getShopList`, { ...params, isNewApi: true })
      if (res) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  }

  /** 上传文件 */
  async upload(params: any = {}) {
    try {
      let res = await this.axios('post', `/api/user/updateUserAvatar`, { ...params, isNewApi: true })
      if (res) {
        return res
      }

    } catch (err) {
      console.log(err)
    }
  }
}
export default new NewApi()