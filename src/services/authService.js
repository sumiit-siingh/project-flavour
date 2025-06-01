import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

// Create axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

const authService = {
    async login(email, password) {
        const response = await axiosInstance.post('/login', { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    },

    async signup(name, email, password) {
        const response = await axiosInstance.post('/signup', { name, email, password });
        return response.data;
    },

    logout() {
        localStorage.removeItem('token');
    },

    getCurrentToken() {
        return localStorage.getItem('token');
    },

    async getUserDetails() {
        const token = this.getCurrentToken();
        if (!token) return null;
        
        try {
            const response = await axiosInstance.get('/user-details');
            return response.data;
        } catch (error) {
            console.error('Error fetching user details:', error);
            return null;
        }
    },

    async checkEmailExists(email) {
        const response = await axiosInstance.get('/check-email', {
            params: { email }
        });
        return response.data;
    },

    async resetPassword(email, newPassword) {
        const response = await axiosInstance.post('/reset-password', {
            email,
            newPassword
        });
        return response.data;
    }
};

export default authService; 