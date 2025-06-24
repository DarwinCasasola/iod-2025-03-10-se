// src/pages/HomePage.jsx
import React from "react";
import EmojiForm from "../components/EmojiForm";
import EmojiChanger from "../components/EmojiChanger";

export default function HomePage() {
    return (
        <div>
            <h2>Welcome Home</h2>
            <EmojiForm />
            <EmojiChanger />
        </div>
    );
}
