import React, { useState, useContext } from "react";

// 1. Create the context
const EmojiContext = React.createContext();

// 2. Provider component
export const EmojiProvider = ({ children }) => {
    const [emoji, setEmoji] = useState("🙂");

    const changeEmoji = (newEmoji) => setEmoji(newEmoji);

    return <EmojiContext.Provider value={{ emoji, changeEmoji }}>{children}</EmojiContext.Provider>;
};

// 3. Custom hook for easy access
export const useEmojiContext = () => useContext(EmojiContext);
