// Get elements from the DOM
const tapButton = document.getElementById('tapButton');
const coinCountElement = document.getElementById('coinCount');
const progressBar = document.getElementById('progressBar');

// Retrieve saved coin count and progress from localStorage
let coins = Number(localStorage.getItem('coins')) || 0;
let progress = Number(localStorage.getItem('progress')) || 0;

// Update UI on load
coinCountElement.textContent = coins;
progressBar.value = progress;

// Add event listener to the "Tap to Earn" button
tapButton.addEventListener('click', () => {
    // Increment coins by 100 per tap
    coins += 100;

    // Update progress bar (Assuming progress is based on a 1000 coin milestone)
    progress = coins % 1000;  // Reset progress after 1000 coins (can adjust this as needed)

    // Store updated values in localStorage
    localStorage.setItem('coins', coins);
    localStorage.setItem('progress', progress);

    // Update UI with new coin count and progress
    coinCountElement.textContent = coins;
    progressBar.value = (progress / 1000) * 100; // Update the progress bar (0 - 100%)

    // Optional: Show an alert or animation to inform the user
    // alert("You've earned 100 coins!");
});
