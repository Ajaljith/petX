import axios from "axios";
import { BASE_URL } from "../utils/url";
import { getUserData } from "../utils/storageHandler";

export const animalsaddAPI= async(data)=>{
    const response = await axios.post(`${BASE_URL}/animals/add`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const animalseditAPI= async()=>{
    const response = await axios.put(`${BASE_URL}/animals/edit`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const animalsviewallAPI= async()=>{
    const response = await axios.get(`${BASE_URL}/animals/viewall`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const animalssearchAPI= async()=>{
    const response = await axios.get(`${BASE_URL}/animals/search`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}

export const animalsdeleteAPI= async()=>{
    const response = await axios.delete(`${BASE_URL}/animals/delete`,data, {
        withCredentials: true,  // Make sure credentials (cookies) are sent
    });
    return response.data
}