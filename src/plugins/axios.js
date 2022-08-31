import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = apiUrl;

axios.interceptors.request.use((request) => {
        let token = localStorage.getItem('access_token');
        if (token) request.headers.authorization = `Bearer ${token}`;
        return request;
    }
);

axios.interceptors.response.use(
    response => response,
    error => {
        const originalConfig = error.config;
        if (error?.response?.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            if (originalConfig.url === `${apiUrl.slice(0, 43)}/token/refresh/`) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                return Promise.reject(error);
            }

            const refreshToken = localStorage.getItem("refresh_token") || ""
            if (!refreshToken) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                return Promise.reject(error);
            }

            axios.post(`${apiUrl.slice(0, 43)}/token/refresh/`, {refresh: refreshToken}).then(
                res => {
                    if (res.data) {
                        localStorage.setItem("access_token", res.data.access);
                        return axios(originalConfig)
                    }
                }
            ).catch(error => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                return Promise.reject(error);
            })

        } else {
            return Promise.reject(error);
        }
    }
)

export default axios;
