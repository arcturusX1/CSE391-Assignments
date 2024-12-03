const inputField = document.getElementById('input');


function clearAll() {
    inputField.value = '';
}

function capitalize() {
    const currentText = inputField.value;
    inputField.value = currentText === currentText.toUpperCase()
        ? currentText.toLowerCase()
        : currentText.toUpperCase(); //ternary op -> condition? true:false
}

function sortText() {
    const lines = inputField.value.split('\n');
    lines.sort((a, b) => a.trim().localeCompare(b.trim()));
    inputField.value = lines.join('\n');
}

function reverseText() {
    const lines = inputField.value.split('\n');
    const reversedLines = lines.map(line => line.split('').reverse().join(''));
    inputField.value = reversedLines.join('\n');
}

function stripBlank() {
    const lines = inputField.value.split('\n');
    const cleanedLines = lines
        .map(line => line.trim())
        .filter(line => line.length > 0);
    inputField.value = cleanedLines.join('\n');
}

function addNumbers() {
    const lines = inputField.value.split('\n');
    const numberedLines = lines.map((line, index) => `${index + 1}. ${line.replace(/^\d+\.\s*/, '')}`);
    inputField.value = numberedLines.join('\n');
}

function shuffleText() {
    const lines = inputField.value.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const randomIndex = Math.floor(Math.random() * lines.length); // Generate a random index
        // Swap current line with the randomly chosen line
        [lines[i], lines[randomIndex]] = [lines[randomIndex], lines[i]]; 
    }
    inputField.value = lines.join('\n'); // Join shuffled lines back into the textarea
}


// Add event listeners to buttons by their IDs
document.getElementById('clear').addEventListener('click', clearAll);
document.getElementById('capitalize').addEventListener('click', capitalize);
document.getElementById('sort').addEventListener('click', sortText);
document.getElementById('reverse').addEventListener('click', reverseText);
document.getElementById('stripBlank').addEventListener('click', stripBlank);
document.getElementById('addNumbers').addEventListener('click', addNumbers);
document.getElementById('shuffle').addEventListener('click', shuffleText);
