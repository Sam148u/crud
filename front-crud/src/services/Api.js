import axios from "axios";

const API_URL = "http://localhost:5000/items"; // Cambiar al URL del backend en producción

const api = {
    getItems: () => axios.get(API_URL),
    createItem: (data) => axios.post(API_URL, data),
    updateItem: (id, data) => axios.put(`${API_URL}/${id}`, data),
    deleteItem: (id) => axios.delete(`${API_URL}/${id}`),
};

export default api;