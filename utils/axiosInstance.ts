import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "/api", // Backend API URL'ini buraya yaz
    headers: {
        "Content-Type": "application/json",
    },
})

export default axiosInstance