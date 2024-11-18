import React, { useState } from "react";

const ItemForm = ({ onSave, item = {} }) => {
    const [formData, setFormData] = useState({
        name: item.name || "",
        description: item.description || "",
        price: item.price || "",
        category: item.category || "",
        status: item.status || "available",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                required
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descripción"
                required
            />
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Precio"
                required
            />
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Categoría"
                required
            />
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="available">Disponible</option>
                <option value="unavailable">No disponible</option>
            </select>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default ItemForm;