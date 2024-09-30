import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5002/api/v1",
    headers: {
        "Authorization": " Bearer secret "
    }
});

export default axiosInstance