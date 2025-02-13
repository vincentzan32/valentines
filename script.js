const messages = [
    "Are you sure?",
    "Really sure?",
    "Why are you clicking this?",
    "You better stop clicking me!",
    "You're not allowed to click me anymore.",
    "If you click me again, I'm stealing Stanisława.",
    "Say goodbye to Stanisława.",
    "Click me again and I'm taking Gabby too.",
    "Gone.",
    "One more click and I take away your king...",
    "GEORGIO GNEZDA!",
    "Wow, you're terrible.",
    "You should stop.",
    "STOP!",
    "One last straw...",
    "I'm taking away LA Fitness.",
    "3...",
    "2...",
    "1...",
    "Goodbye LA Fitness!",
    "Fine, you can click yes now.",
];

let currentMessageIndex = 0;

const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

let yesScale = 1;
let noScale = 1;

yesButton.addEventListener("click", () => {
    // Navigate to message.html
    window.location.href = "message.html";

    // Hide the noButton
    noButton.style.display = "none";

    // Scale up the yesButton
    yesButton.style.transform = "scale(1.6)";
});

noButton.addEventListener("click", () => {
    yesScale += 0.05;
    yesButton.style.transform = `scale(${yesScale})`;

    noScale -= 0.0;
    noButton.style.transform = `scale(${noScale})`;

    teleportButton(noButton);

    noButton.textContent = messages[currentMessageIndex];

    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
});

function teleportButton(button) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();

    const padding = 20;

    const minX = padding;
    const maxX = screenWidth - button.offsetWidth - padding;
    const minY = padding;
    const maxY = screenHeight - button.offsetHeight - padding;

    let randomX, randomY;
    do {
        randomX = minX + Math.random() * (maxX - minX);
        randomY = minY + Math.random() * (maxY - minY);
    } while (
        randomX + button.offsetWidth > cardRect.left - padding &&
        randomX < cardRect.right + padding && 
        randomY + button.offsetHeight > cardRect.top - padding &&
        randomY < cardRect.bottom + padding
    );

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
button.style.top = `${randomY}px`;
}

window.onload = function() {
    showSlides();  // Start the slideshow after everything has loaded
    setInterval(showSlides, 3000);
};

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to the first slide
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); // Run the slideshow
