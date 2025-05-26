function calculate(operation) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    axios
        .get(`/calculator/${operation}?num1=${num1}&num2=${num2}`)
        .then((response) => {
            document.getElementById("result").textContent = response.data.result;
        })
        .catch((error) => {
            document.getElementById("result").textContent = "Error";
            console.error(error);
        });
}
