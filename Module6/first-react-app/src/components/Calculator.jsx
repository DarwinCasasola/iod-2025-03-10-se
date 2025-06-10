// src/components/Calculator.jsx
import { useState } from "react";
import InputField from "./InputField";
import OperatorSelector from "./OperatorSelector";
import Result from "./Result";

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState("+");

    const calculateResult = () => {
        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num2 !== 0 ? num1 / num2 : "Error";
            default:
                return "N/A";
        }
    };

    return (
        <div className="Calculator componentBox">
            <h2>Basic Calculator</h2>
            <InputField label="Number 1" value={num1} onChange={setNum1} />
            <OperatorSelector operator={operator} onChange={setOperator} />
            <InputField label="Number 2" value={num2} onChange={setNum2} />
            <Result result={calculateResult()} />
        </div>
    );
}

export default Calculator;
