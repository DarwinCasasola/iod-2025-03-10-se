// src/components/Emoji.jsx
import { useState } from "react";

function Emoji() {
    const [happy, setHappy] = useState(true);

    const toggleMood = () => {
        setHappy(!happy);
    };

    return (
        <div className="Emoji componentBox">
            <h1>{happy ? "😊" : "😐"}</h1>
            <button onClick={toggleMood}>Change Mood</button>
        </div>
    );
}

export default Emoji;
