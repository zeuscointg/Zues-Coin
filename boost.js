const body = document.body;
const today = new Date().toISOString().split('T')[0]; // Get today's date

let coins = Number(localStorage.getItem('coins')) || 0;
const lastClaimDate = localStorage.getItem('lastClaimDate');

// Display current coin balance
body.querySelector('#balance').textContent = coins.toLocaleString();

const turbo = body.querySelector('#turbo');
const charge = body.querySelector('#charge');

function canClaimReward() {
    return lastClaimDate !== today; // Can claim if the last claim date is not today
}

turbo.addEventListener('click', () => {
    if (canClaimReward()) {
        coins += 2500; // Add 2500 coins
        localStorage.setItem('coins', coins);  // Save updated coin count
        body.querySelector('#balance').textContent = coins.toLocaleString();  // Update UI

        localStorage.setItem('lastClaimDate', today);  // Set today's date as the last claim date

        // Update claim count
        localStorage.setItem('count', '0');
        setTimeout(() => {
            localStorage.setItem('count', '1');
        }, 5000);
    } else {
        alert('You can only claim this reward once a day.');
    }
});

charge.addEventListener('click', () => {
    if (canClaimReward()) {
        coins += 3;  // Add 3 coins
        localStorage.setItem('coins', coins);  // Save updated coin count
        body.querySelector('#balance').textContent = coins.toLocaleString();  // Update UI

        localStorage.setItem('lastClaimDate', today);  // Set today's date as the last claim date
    } else {
        alert('You can only claim this reward once a day.');
    }
});
