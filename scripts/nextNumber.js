const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let currentIndex = 0;

document.getElementById('nxtButton').addEventListener('click', function() {
    const numberDisplay = document.querySelector('.nxtDisplay');
    numberDisplay.textContent = numbers[currentIndex];
    currentIndex = (currentIndex + 1) % numbers.length;
});