import server from './server'

class API extends server {
    async getshop(params={}) {
        try {
            let res=await this.axios('get', 'shopping/restaurant/1', params)
            if(res) {
                return res
            }
        }catch(err) {
            console.log(err)
        }
    }
}

export default new API()