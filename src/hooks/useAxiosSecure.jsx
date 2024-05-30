import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    // withCredentials: true
})

const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        console.log(error);
    });

    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        const status = error.response.status;
        console.log('Status error in the response interceptors', status);
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;