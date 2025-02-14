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

    noScale -= 0.00;
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

const imagePaths = [
    "soph.photo.1.jpg",
    "soph.photo.2.jpg",
    "soph.photo.3.jpg",
    "soph.photo.4.jpg",
    "soph.photo.5.jpg",
    "soph.photo.6.jpg",
    "soph.photo.7.jpg",
    "soph.photo.8.jpg",
    "soph.photo.9.jpg",
    "soph.photo.10.jpg"
];

const slides = document.querySelectorAll(".slideshow img");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((img, i) => {
        if (i === index) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Start with the first slide active
showSlide(currentIndex);

// Change image every 5 seconds
setInterval(showNextImage, 5000);
