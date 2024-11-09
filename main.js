const body = document.body;
const h1 = body.querySelector('h1');

let coins = localStorage.getItem('coins');  // Retrieve the coin count from localStorage

if (coins === null) {
    localStorage.setItem('coins', '0');  // Set initial coin count if not set
    h1.textContent = '0';  // Display '0' initially
} else {
    h1.textContent = Number(coins).toLocaleString();  // Display the current coin count
}

// You can also display the coins on other places where necessary, e.g. a "balance" container
document.getElementById('balance').textContent = coins.toLocaleString(); // Update on balance container
