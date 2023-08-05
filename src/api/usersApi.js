import { jsonPlaceholder } from '@/api/instances.js'

export default {
  async read() {
    const result = await jsonPlaceholder.get('/users')
    return result
  }
}
