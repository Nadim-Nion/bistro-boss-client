import axios from 'axios';
import React from 'react';

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    // withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;