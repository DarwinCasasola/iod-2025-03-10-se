import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { EmojiProvider } from "./context/EmojiContext";

export default function App() {
    return (
        <EmojiProvider>
            <AppRoutes />
        </EmojiProvider>
    );
}
