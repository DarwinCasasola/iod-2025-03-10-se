import React, { useState } from "react";
import { useBitcoinRate } from "../hooks/useBitcoinRate";
import { useEmojiContext } from "../context/EmojiContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const { rate, loading, error } = useBitcoinRate(currency);
    const { emoji } = useEmojiContext();

    const options = currencies.map((curr) => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>
                Choose currency:
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {rate && !loading && !error && (
                <div>
                    <strong>Current Price:</strong> {rate} {currency}
                </div>
            )}
        </div>
    );
}

export default BitcoinRates;
