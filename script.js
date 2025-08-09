// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animate tradition cards
function animateCard(card) {
    card.style.transform = 'translateY(-10px) scale(1.05) rotate(2deg)';
    setTimeout(() => {
        card.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    }, 300);
}

// Wish generator
const wishes = [
    "May this Raksha Bandhan bring you endless joy and strengthen the beautiful bond you share with your siblings! 🎀",
    "Wishing you a Raksha Bandhan filled with love, laughter, and the warmth of family bonds that last forever! ✨",
    "May the thread of rakhi bind you with love, protection, and countless happy memories! Happy Raksha Bandhan! 🌟",
    "On this special day, may your bond grow stronger and your love for each other shine brighter! 💝",
    "May this festival of love and protection bring prosperity, happiness, and good health to you and your family! 🎊",
    "Wishing you a Raksha Bandhan that's as sweet as the mithai and as colorful as the rangoli! 🌈",
    "May the sacred bond of Raksha Bandhan fill your life with joy, peace, and endless blessings! 🙏",
    "Here's to celebrating the most precious relationship - may your sibling bond be blessed with love always! 💖"
];

function generateWish() {
    const wishDisplay = document.getElementById('wishDisplay');
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    
    // Add fade effect
    wishDisplay.style.opacity = '0';
    setTimeout(() => {
        wishDisplay.textContent = randomWish;
        wishDisplay.style.opacity = '1';
    }, 200);
    
    // Add sparkle effects
    createSparkles(wishDisplay);
}

// Create sparkle effects
function createSparkles(element) {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        element.style.position = 'relative';
        element.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }
}

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Add floating elements
function addFloatingElements() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 10; i++) {
        const element = document.createElement('div');
        element.innerHTML = ['🎀', '🌟', '💝', '🎊'][Math.floor(Math.random() * 4)];
        element.style.position = 'absolute';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.fontSize = '1.5rem';
        element.style.opacity = '0.3';
        element.style.animation = `floating ${3 + Math.random() * 2}s ease-in-out infinite`;
        element.style.animationDelay = Math.random() * 2 + 's';
        hero.appendChild(element);
    }
}

// Initialize floating elements when page loads
window.addEventListener('load', addFloatingElements);

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(255,107,107,0.95), rgba(254,202,87,0.95), rgba(255,159,243,0.95))';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #ff6b6b, #feca57, #ff9ff3)';
        header.style.backdropFilter = 'none';
    }
});
