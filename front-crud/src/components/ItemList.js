import React, { useEffect, useState } from "react";
import api from "../services/Api.js";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    const fetchItems = async () => {
        try {
            const { data } = await api.getItems();
            setItems(data);
        } catch (error) {
            console.error("Error al obtener los elementos:", error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleCreate = async (item) => {
        try {
            await api.createItem(item);
            fetchItems();
        } catch (error) {
            console.error("Error al crear el elemento:", error.response?.data || error);
        }
    };

    const handleUpdate = async (id, item) => {
        try {
            await api.updateItem(id, item);
            setEditingItem(null);
            fetchItems();
        } catch (error) {
            console.error("Error al actualizar el elemento:", error.response?.data || error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.deleteItem(id);
            fetchItems();
        } catch (error) {
            console.error("Error al eliminar el elemento:", error.response?.data || error);
        }
    };

    return (
        <div>
            <h1>Lista de Elementos</h1>
            {editingItem ? (
                <ItemForm
                    item={editingItem}
                    onSave={(data) => handleUpdate(editingItem._id, data)}
                />
            ) : (
                <ItemForm onSave={handleCreate} />
            )}
            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        <span>{item.name}</span>
                        <button onClick={() => setEditingItem(item)}>Editar</button>
                        <button onClick={() => handleDelete(item._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;