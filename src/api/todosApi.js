import { jsonPlaceholder } from '@/api/instances.js'

export default {
  async read() {
    const { data } = await jsonPlaceholder.get('/todos')
    return data
  }
}
