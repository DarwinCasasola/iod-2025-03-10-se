import React from "react";
import EmojiForm from "./components/EmojiForm";
import EmojiChanger from "./components/EmojiChanger";
import BitcoinRates from "./components/BitcoinRates";
import { EmojiProvider } from "./context/EmojiContext";

function App() {
    return (
        <EmojiProvider>
            <div className="App">
                <h1>React Mood & Bitcoin Tracker</h1>

                {/* Lab 4 - Controlled Form */}
                <EmojiForm />

                {/* Lab 3 - Context Components */}
                <EmojiChanger />
                <BitcoinRates />
            </div>
        </EmojiProvider>
    );
}

export default App;
