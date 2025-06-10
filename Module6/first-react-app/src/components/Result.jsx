// src/components/Result.jsx
function Result({ result }) {
    return (
        <div>
            <h3>Result: {isNaN(result) ? "N/A" : result}</h3>
        </div>
    );
}

export default Result;
