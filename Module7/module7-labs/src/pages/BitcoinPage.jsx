// src/pages/BitcoinPage.jsx
import React from "react";
import BitcoinRates from "../components/BitcoinRates";

export default function BitcoinPage() {
    return (
        <div>
            <h2>Bitcoin Exchange Rate</h2>
            <BitcoinRates />
        </div>
    );
}
