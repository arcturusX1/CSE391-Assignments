const quotes = [
    "Do not be afraid of competition.",
    "An exciting opportunity lies ahead of you.",
    "You love peace.",
    "Get your mind set…confidence will lead you on.",
    "You will always be surrounded by true friends.",
    "Sell your ideas-they have exceptional merit.",
    "You should be able to undertake and complete anything.",
    "You are kind and friendly.",
    "You are wise beyond your years.",
    "Your ability to juggle many tasks will take you far.",
    "A routine task will turn into an enchanting adventure.",
    "Beware of all enterprises that require new clothes.",
    "Be true to your work, your word, and your friend.",
    "Goodness is the only investment that never fails.",
    "A journey of a thousand miles begins with a single step.",
    "Forget injuries; never forget kindnesses.",
    "Respect yourself and others will respect you.",
    "A man cannot be comfortable without his own approval.",
    "Always do right. This will gratify some people and astonish the rest.",
    "It is easier to stay out than to get out.",
    "Sing everyday and chase the mean blues away.",
    "You will receive money from an unexpected source.",
    "Attitude is a little thing that makes a big difference.",
    "Plan for many pleasures ahead.",
    "Experience is the best teacher.",
    "You will be happy with your spouse.",
    "Expect the unexpected.",
    "Stay healthy. Walk a mile.",
    "The family that plays together stays together.",
    "Eat chocolate to have a sweeter life.",
    "Once you make a decision the universe conspires to make it happen.",
    "Make yourself necessary to someone.",
    "The only way to have a friend is to be one.",
    "Nothing great was ever achieved without enthusiasm.",
    "Dance as if no one is watching.",
    "Live this day as if it were your last.",
    "Your life will be happy and peaceful.",
    "Reach for joy and all else will follow.",
    "Move in the direction of your dreams.",
    "Bloom where you are planted.",
    "Appreciate. Appreciate. Appreciate.",
    "Happy News is on its way."
];

// Select the buttons
const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const greenButton = document.getElementById("greenButton");
const magentaButton = document.getElementById("magentaButton");

function changeStyle(containerBorderColor, textContainerGradient, font) {
    // Change document background
 
    // Change container background and border
    const container = document.querySelector('.container');
    container.style.background = `linear-gradient(${textContainerGradient})`;
    container.style.borderWidth = '3px';
    container.style.borderStyle = 'solid';
    container.style.borderColor = containerBorderColor;

    // Change fortune text color for readability
    const fortuneText = document.querySelector('#fortune h3');
    fortuneText.style.color = 'white';
    fortuneText.style.fontFamily = font;
}

function randomQuote(){
    const fortuneDiv = document.getElementById("fortune").querySelector("h3");
    const randomIdx = Math.floor(Math.random() * quotes.length);
    fortuneDiv.innerHTML = quotes[randomIdx];
}

// Add event listeners for color change buttons
redButton.addEventListener('click', () => 
    changeStyle(
        '#DE7C7D',           // container border
        'to right, #740938, #CC2B52', // text container gradient
        'Calibri'
    )
);

blueButton.addEventListener('click', () => 
    changeStyle(
        '#629584', 
        'to right, #37B7C3, #088395',
        'Arial'
    )
);

greenButton.addEventListener('click', () => 
    changeStyle(
        '#859F3D', 
        'to right, #1A5319, #80AF81',
        'Trebuchet MS'
    )
);

magentaButton.addEventListener('click', () => 
    changeStyle(
        '#9694FF', 
        'to right, #694F8E, #B692C2',
        'Tahoma'
    )
);

// When the page loads, display a random quote
window.onload = randomQuote;