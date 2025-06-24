// src/hooks/useBitcoinRate.js
import { useState, useEffect } from "react";

export function useBitcoinRate(currency) {
    const [rate, setRate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        setError("");
        setRate(null);

        // CoinGecko API - No CORS issue, no auth needed
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => {
                const value = data?.bitcoin?.[currency.toLowerCase()];
                if (!value) {
                    throw new Error("Currency not supported or invalid format");
                }
                setRate(value);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [currency]);

    return { rate, loading, error };
}
