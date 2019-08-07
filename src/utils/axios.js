import axios from 'axios'
import wepyAxiosAdapter from 'wepy-plugin-axios/dist/adapter'
const adapter = wepyAxiosAdapter(axios)

export default axios.create({
  adapter: adapter      
})