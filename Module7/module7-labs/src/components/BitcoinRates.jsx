import React, { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [rate, setRate] = useState(null);

    useEffect(() => {
        let ignore = false;

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
            .then((res) => res.json())
            .then((data) => {
                if (!ignore) {
                    setRate(data.bitcoin[currency.toLowerCase()]);
                }
            });

        return () => {
            ignore = true; // cleanup to avoid setting state after unmount
        };
    }, [currency]);

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
            <div>
                <strong>Current Price:</strong> {rate ? `${rate} ${currency}` : "Loading..."}
            </div>
        </div>
    );
}

export default BitcoinRates;
