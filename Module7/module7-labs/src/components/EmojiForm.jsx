import { useState } from "react";
import React from "react";

function EmojiForm() {
    const [input, setInput] = useState("");
    const [submitted, setSubmitted] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(input);
        setInput("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="emoji">Your Favorite Emoji:</label>
                <input id="emoji" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {submitted && <p>Submitted Emoji: {submitted}</p>}
        </div>
    );
}

export default EmojiForm; // ✅ This is critical!
