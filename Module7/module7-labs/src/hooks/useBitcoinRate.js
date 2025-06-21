import { useReducer, useEffect } from "react";

const initialState = {
    rate: null,
    loading: true,
    error: ""
};

function reducer(state, action) {
    switch (action.type) {
        case "FETCH_INIT":
            return { ...state, loading: true, error: "" };
        case "FETCH_SUCCESS":
            return { rate: action.payload, loading: false, error: "" };
        case "FETCH_ERROR":
            return { rate: null, loading: false, error: action.payload };
        default:
            return state;
    }
}

export function useBitcoinRate(currency) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let ignore = false;

        dispatch({ type: "FETCH_INIT" });

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
            .then((res) => res.json())
            .then((data) => {
                if (!ignore) {
                    dispatch({ type: "FETCH_SUCCESS", payload: data.bitcoin[currency.toLowerCase()] });
                }
            })
            .catch((err) => {
                if (!ignore) {
                    dispatch({ type: "FETCH_ERROR", payload: err.message || "Error fetching data" });
                }
            });

        return () => {
            ignore = true;
        };
    }, [currency]);

    return state;
}
