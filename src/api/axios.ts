import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

instance.interceptors.request.use((config) => {
    return config
})

instance.interceptors.response.use((res) => {
    return res.data
})

export default instance