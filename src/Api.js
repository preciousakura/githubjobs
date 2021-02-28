import axios from 'axios'


const Api = axios.create ({
    baseURL: 'https://cors.bridged.cc/https://jobs.github.com/'
})

export default Api;