const button = document.getElementById("button");
const result = document.getElementById("result");
const valueInput = document.getElementById("input");
const convertType = document.getElementById("convertType");

button.addEventListener("click", () => {
    // string to float
    const value = parseFloat(valueInput.value);
    //parseFloat ignores non-numerical values, so it'll be empty if it's text
    
    // value not empty check
    if (isNaN(value)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }
    
    // convert
    if (convertType.value === "lb to kg") {
        result.innerHTML = `${(value * 0.4536)} Kilograms`;
    } else {
        result.innerHTML = `${(value * 2.2046)} Pounds`;
    }
});