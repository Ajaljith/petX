import axios from "axios";
import { BASE_URL } from "../utils/url";
import { getUserData } from "../utils/storageHandler";

export const usersregisterAPI= async(data)=>{
    
    const response = await axios.post(`${BASE_URL}/users/register`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const usersloginAPI= async(data)=>{
    const response = await axios.post(`${BASE_URL}/users/login`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const userseditAPI= async(data)=>{
    const response = await axios.put(`${BASE_URL}/users/edit`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const userslogoutAPI= async(data)=>{
    const response = await axios.delete(`${BASE_URL}/users/logout`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const usersviewAPI= async()=>{
    const response = await axios.get(`${BASE_URL}/users/view`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const usersforgotAPI= async(data)=>{
    const response = await axios.post(`${BASE_URL}/users/forgot`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const usersresetAPI= async(data)=>{
    const response = await axios.post(`${BASE_URL}/users/reset`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}