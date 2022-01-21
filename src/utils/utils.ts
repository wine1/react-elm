class Utils {
  /** 写入localstorage */
  setLocalStorage(key: string, value: any) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
      localStorage.setItem(key, value)
    }
  }

  /** 获取localstorage */
  getLocalStorage(key: string) {
    let value = localStorage.getItem(key) || ''
    return JSON.parse(value)
  }
}
export default new Utils()