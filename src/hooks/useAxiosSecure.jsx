import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-iota-virid.vercel.app',
    // withCredentials: true
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        // console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        console.log(error);
    });

    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        const status = error.response?.status;
        // console.log('Status error in the response interceptors', status);
        if (status === 401 || status === 403) {
            logOut()
                .then(() => {
                    navigate('/login');
                })
                .catch(error => {
                    console.log(error);
                })
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;