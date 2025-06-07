// src/components/AddCatForm.jsx
import { useState } from "react";

function AddCatForm({ onAddCat }) {
    const [name, setName] = useState("");
    const [latinName, setLatinName] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !latinName || !image) return;

        const newCat = {
            id: Date.now(), // basic unique ID
            name,
            latinName,
            image
        };

        onAddCat(newCat);

        // Clear form
        setName("");
        setLatinName("");
        setImage("");
    };

    return (
        <form onSubmit={handleSubmit} className="AddCatForm componentBox">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input
                type="text"
                placeholder="Latin Name"
                value={latinName}
                onChange={(e) => setLatinName(e.target.value)}
            />
            <input type="url" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            <button type="submit">Add Cat</button>
        </form>
    );
}

export default AddCatForm;
