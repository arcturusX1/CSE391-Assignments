// Select necessary DOM elements
const inputField = document.getElementById('input');
const maxResult = document.getElementById('maxResult');
const minResult = document.getElementById('minResult');
const sumResult = document.getElementById('sumResult');
const avgResult = document.getElementById('avgResult');
const rvrsResult = document.getElementById('rvrsResult');

// Function to process input and update results
function updateResults() {
    const input = inputField.value; // Get the input value
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num)); // Parse numbers

    if (numbers.length > 0) {
        // Calculate values
        const max = Math.max(...numbers);
        const min = Math.min(...numbers);
        const sum = numbers.reduce((a, b) => a + b, 0);
        const avg = sum / numbers.length;
        const reversed = numbers.slice().reverse();

        // Update results in the DOM
        maxResult.innerHTML = max;
        minResult.innerHTML = min;
        sumResult.innerHTML = sum;
        avgResult.innerHTML = avg
        rvrsResult.innerHTML = reversed.join(', ');
    } else {
        // Clear results if input is empty or invalid
        maxResult.innerHTML = '';
        minResult.innerHTML = '';
        sumResult.innerHTML = '';
        avgResult.innerHTML = '';
        rvrsResult.innerHTML = '';
    }
}

// Add event listener to input field
inputField.addEventListener('input', updateResults);
