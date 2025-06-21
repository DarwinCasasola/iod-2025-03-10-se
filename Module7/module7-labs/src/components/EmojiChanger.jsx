import React from "react";
import { useEmojiContext } from "../context/EmojiContext";

function EmojiChanger() {
    const { emoji, changeEmoji } = useEmojiContext();

    const moods = ["😄", "😐", "😢", "😡", "🤩"];

    return (
        <div className="EmojiChanger componentBox">
            <h3>Current Mood: {emoji}</h3>
            {moods.map((mood) => (
                <button key={mood} onClick={() => changeEmoji(mood)}>
                    {mood}
                </button>
            ))}
        </div>
    );
}

export default EmojiChanger;
