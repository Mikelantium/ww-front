import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL : 'https://farm-simulator-back.vercel.app/'
})