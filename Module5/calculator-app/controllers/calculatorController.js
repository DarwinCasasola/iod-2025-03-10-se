const addNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input" });
    }

    const result = num1 + num2;
    res.status(200).json({ result });
};

const subtractNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 - num2;
    res.status(200).json({ result });
};

const multiplyNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 * num2;
    res.status(200).json({ result });
};

const divideNumbers = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (num2 === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed" });
    }
    const result = num1 / num2;
    res.status(200).json({ result });
};

module.exports = { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers };
