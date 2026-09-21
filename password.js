const passwordCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',
];
const length = 15;

// 1. Select ALL elements with the class '.back'
const backCards = document.querySelectorAll('.back');

// 2. Loop through each card found
backCards.forEach(card => {
    const cardType = card.dataset.type;
    console.log(cardType); // Log the card type to the console for debugging
    
    if (cardType === 'random') {
        const passwordlist = document.createElement('ul'); 
        passwordlist.id = 'random-list'; 
        card.appendChild(passwordlist); 
    } 
    else if (cardType === 'crypto') {
        const passwordParagraph = document.createElement('ul'); 
        passwordParagraph.id = 'crypto-list'; 
        card.appendChild(passwordParagraph); 
    }
    console.log(card.innerHTML); 
});

const randomPasswordBtn = document.querySelector('#random-password');
const cryptoPasswordBtn = document.querySelector('#crypto-password');

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * passwordCharacters.length);
        password += passwordCharacters[random];
    }
    return password;
}

function cryptoPassword(length) {
    let password = '';
    const randomBuffer = new Uint32Array(length);
    
    window.crypto.getRandomValues(randomBuffer);
    
    for (let i = 0; i < length; i++) {
        
        let random = randomBuffer[i] % passwordCharacters.length;
        password += passwordCharacters[random];
    }
    return password;
}

function addPasswordToList(listId, password) {
    const list = document.getElementById(listId);
    if (list) {
        const li = document.createElement('li');
        li.textContent = password;
        list.appendChild(li);
        
        
        list.scrollTop = list.scrollHeight;
    }
}

// Event Listeners
randomPasswordBtn.addEventListener('click', () => {
    const pass = generatePassword(length);
    addPasswordToList('random-list', pass);
});

cryptoPasswordBtn.addEventListener('click', () => {
    const pass = cryptoPassword(length);
    addPasswordToList('crypto-list', pass);
});