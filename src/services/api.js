import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '15dba7d5e28591aa65be676f14361cc0',
        language: 'pt-BR',
        page: 1
    }
})

export default api 