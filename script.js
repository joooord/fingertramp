// Fingertramp Website - Interactive JavaScript

// Cool Quotes from Fingertramp
const quotes = [
    "Be cool, stay weird, never boring.",
    "Life's too short for boring websites.",
    "Tramp through life with style.",
    "Point at your dreams and make them real.",
    "Cool is a state of mind, not a temperature.",
    "Why walk when you can tramp with flair?",
    "Seriously cool vibes only.",
    "No bad days, just plot twists.",
    "Keep it real, keep it surreal.",
    "Fingertramp: Pointing the way to awesome."
];

// Quote Rotation
const quoteElement = document.getElementById('quote');
const quoteBtn = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.style.animation = 'none';
    setTimeout(() => {
        quoteElement.textContent = `"${randomQuote}"`;
        quoteElement.style.animation = 'fadeIn 1s ease-in';
    }, 100);
});

// Mood Slider
const moodSlider = document.getElementById('moodSlider');
const moodEmoji = document.getElementById('moodEmoji');
const moodText = document.getElementById('moodText');

const moods = [
    { emoji: '😢', text: 'Needs More Cool', range: [0, 20] },
    { emoji: '😐', text: 'Getting There', range: [21, 40] },
    { emoji: '🙂', text: 'Pretty Cool', range: [41, 60] },
    { emoji: '😎', text: 'Peak Cool', range: [61, 80] },
    { emoji: '🤩', text: 'Ultra Legendary', range: [81, 100] }
];

moodSlider.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    const currentMood = moods.find(mood => value >= mood.range[0] && value <= mood.range[1]);

    moodEmoji.textContent = currentMood.emoji;
    moodText.textContent = currentMood.text;

    // Add a little bounce effect
    moodEmoji.style.animation = 'none';
    setTimeout(() => {
        moodEmoji.style.animation = 'pulse 1s infinite';
    }, 10);
});

// Interactive Finger
const finger = document.querySelector('.finger');
let clickCount = 0;

finger.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 5) {
        finger.textContent = '🎉';
        setTimeout(() => {
            finger.textContent = '👆';
            clickCount = 0;
        }, 2000);
    }

    // Random rotation on click
    const randomRotation = Math.floor(Math.random() * 360);
    finger.style.transform = `rotate(${randomRotation}deg) scale(1.3)`;
    setTimeout(() => {
        finger.style.transform = 'rotate(0deg) scale(1)';
    }, 300);
});

// Feature Cards - 3D Tilt Effect
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Gallery Items - Random Emoji Change
const galleryItems = document.querySelectorAll('.gallery-item');
const coolEmojis = ['🎸', '🎨', '🚀', '🌟', '🎪', '🏄', '🎭', '🎵', '🎮', '✨', '🌈', '🔥'];

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const randomEmoji = coolEmojis[Math.floor(Math.random() * coolEmojis.length)];
        const originalText = item.textContent;
        const textParts = originalText.split(' ');
        textParts[0] = randomEmoji;
        item.textContent = textParts.join(' ');
    });
});

// Social Icons Animation
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        icon.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            icon.style.animation = '';
        }, 500);
    });
});

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    header.style.transform = `translateY(${scrolled * 0.3}px)`;
});

// Cursor Trail Effect (Optional - Cool visual)
let cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });

    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);

    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        activateSecretMode();
    }
});

function activateSecretMode() {
    document.body.style.animation = 'rainbow 2s infinite';
    alert('🎉 Secret Fingertramp Mode Activated! You found the cool easter egg!');

    // Add rainbow animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// Random Color Splash on Load
function randomColorSplash() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#c44dff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--accent', randomColor);
}

// Initialize
window.addEventListener('load', () => {
    console.log('🎉 Fingertramp website loaded! Stay cool!');
    randomColorSplash();
});

// Time-based Greeting
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = '';

    if (hour < 12) greeting = 'Morning vibes with Fingertramp';
    else if (hour < 18) greeting = 'Afternoon cool with Fingertramp';
    else greeting = 'Night owls with Fingertramp';

    console.log(greeting);
}

updateGreeting();
