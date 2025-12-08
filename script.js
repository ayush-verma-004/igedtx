document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll for Hero Button
    const revealBtn = document.getElementById('reveal-btn');
    const messageSection = document.getElementById('message');

    revealBtn.addEventListener('click', () => {
        messageSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(el => observer.observe(el));

    // Random Wish Generator
    const wishBtn = document.getElementById('wish-btn');
    const wishDisplay = document.getElementById('wish-display');

    const wishes = [
        "May your year be as beautiful as your soul. ✨",
        "Wishing you endless laughter and zero worries. 💖",
        "I hope all your dreams, big and small, come true. 🌟",
        "May you find joy in the little things every day. 🌸",
        "Here's to another year of being fabulous! 🥂",
        "Sending you a giant hug and so much love! 🤗",
        "You are the sister I never had, and I'm so lucky to have you. 👯‍♀️",
        "May this year bring you closer to your goals and dreams! 🚀",
        "To many more years of friendship and fun! 🎉",
        "Keep shining bright like the star you are! ⭐",
        "Wishing you peace, love, and lots of cake! 🎂",
        "You deserve the world and more. Happy Birthday! 🌍",
        "Cheers to the best 'school sister' ever! 🏫",
        "May every day of this new year glow with good vibes. ✨",
        "Remember, you're stronger than you know and loved more than you think. 💪",
        "Hope your day is filled with sweet surprises! 🎁",
        "Here's to making more unforgettable memories together! 📸"
    ];

    wishBtn.addEventListener('click', () => {
        // Simple animation reset
        wishDisplay.classList.remove('show');

        // Pick a random wish
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];

        // Small delay for effect
        setTimeout(() => {
            wishDisplay.textContent = randomWish;
            wishDisplay.classList.add('show');

            // Optional: Add a subtle confetti burst logic here if needed, 
            // but keeping it simple and clean as requested.
        }, 200);
    });

});
