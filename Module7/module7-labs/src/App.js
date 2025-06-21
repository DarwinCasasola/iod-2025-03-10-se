import React from "react";
import BitcoinRates from "./components/BitcoinRates";
import EmojiChanger from "./components/EmojiChanger";
import { EmojiProvider } from "./context/EmojiContext";

function App() {
    return (
        <EmojiProvider>
            <div className="App">
                <EmojiChanger />
                <BitcoinRates />
            </div>
        </EmojiProvider>
    );
}

export default App;
