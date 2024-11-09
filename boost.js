// Get the coin count from localStorage
let coins = Number(localStorage.getItem('coins')) || 0;

// Function to add coins when a booster task is completed
function addCoins(amount) {
    coins += amount;
    localStorage.setItem('coins', coins);  // Save the updated coin count to localStorage
    updateCoinDisplay();  // Update the coin display on the page
}

// Function to update the coin count display
function updateCoinDisplay() {
    const coinCountElement = document.getElementById('coinCount');
    if (coinCountElement) {
        coinCountElement.textContent = coins;
    }
}

// Example boosters actions (for subscribing, following, etc.)
document.getElementById('subscribeBooster')?.addEventListener('click', () => {
    addCoins(2500);  // Reward user with 2500 coins for subscribing
    alert("You earned 2500 coins for subscribing!");
});

document.getElementById('followBooster')?.addEventListener('click', () => {
    addCoins(1000);  // Reward user with 1000 coins for following
    alert("You earned 1000 coins for following!");
});

// Add more boosters as needed, following the same pattern for each action
