// src/components/OperatorSelector.jsx
function OperatorSelector({ operator, onChange }) {
    return (
        <div>
            <label>
                Operator:
                <select value={operator} onChange={(e) => onChange(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">−</option>
                    <option value="*">×</option>
                    <option value="/">÷</option>
                </select>
            </label>
        </div>
    );
}

export default OperatorSelector;
