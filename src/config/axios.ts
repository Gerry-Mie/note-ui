import Axios from 'axios';
import {getFirebaseToken} from "./firebase.ts";

export const axios = Axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

axios.interceptors.request.use(async (config) => {
    const token = await getFirebaseToken();

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
});

axios.interceptors.response.use(
    // return actual data
    (response) => response.data,
    async (error) => {

        const eCode = error.response?.data?.error;
        if (error.response?.status === 401 && eCode === 'token-expired') {
            const refreshedToken = await getFirebaseToken();

            if (refreshedToken) {
                // Update the authorization header
                axios.defaults.headers.common['Authorization'] = `Bearer ${refreshedToken}`;

                // Retry the original request
                return axios(error.config);
            }
        }

        return Promise.reject(error.response?.data || error);
    }
);