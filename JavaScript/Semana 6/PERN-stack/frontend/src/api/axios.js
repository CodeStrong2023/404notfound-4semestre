import axios from "axios";
const baseURL =import.meta.env.VITE_BACKEND || "http://localhost:3000 ";
const cliente = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
});

export default cliente;