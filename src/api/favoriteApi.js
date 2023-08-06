const storageName = 'favoriteIdList'

export default {
  read() {
    return JSON.parse(localStorage.getItem(storageName)) || [];
  },

  create(payload) {
    const prevStorage = this.read()
    const newStorage = [...prevStorage, payload]

    localStorage.setItem(storageName, JSON.stringify(newStorage));
  },

  delete(payload) {
    const prevStorage = this.read()
    const newStorage = prevStorage.filter(item => item !== payload)

    localStorage.setItem(storageName, JSON.stringify(newStorage));
  }
}
