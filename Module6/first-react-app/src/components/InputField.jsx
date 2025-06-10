// src/components/InputField.jsx
function InputField({ label, value, onChange }) {
    return (
        <div>
            <label>
                {label}:
                <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} />
            </label>
        </div>
    );
}

export default InputField;
