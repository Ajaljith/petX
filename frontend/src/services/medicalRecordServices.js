import axios from "axios";
import { BASE_URL } from "../utils/url";
import { getUserData } from "../utils/storageHandler";

export const recordsaddAPI= async(data)=>{
    const response = await axios.post(`${BASE_URL}/records/add`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const recordseditAPI= async()=>{
    const response = await axios.put(`${BASE_URL}/records/edit`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const recordsviewallAPI= async()=>{
    const response = await axios.get(`${BASE_URL}/records/viewall`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const recordssearchAPI= async()=>{
    const response = await axios.get(`${BASE_URL}/records/search`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const recordsdeleteAPI= async()=>{
    const response = await axios.delete(`${BASE_URL}/records/delete`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}