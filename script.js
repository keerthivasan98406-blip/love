// Console Easter Egg
console.log("%c💖 She changed my life.", "color: #ff4d88; font-size: 20px; font-weight: bold;");

// Password Screen
const passwordScreen = document.getElementById('passwordScreen');
const passwordInput = document.getElementById('passwordInput');
const passwordBtn = document.getElementById('passwordBtn');
const passwordHint = document.getElementById('passwordHint');

// Set your secret password here
const correctPassword = "pondatti";

passwordBtn.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkPassword();
});

function checkPassword() {
    const input = passwordInput.value.toLowerCase().trim();
    if (input === correctPassword) {
        passwordScreen.classList.add('hidden');
        setTimeout(() => {
            passwordScreen.style.display = 'none';
            mainWebsite.style.display = 'block';
            setTimeout(() => {
                mainWebsite.classList.add('visible');
                startScrollAnimations();
                createRosePetals();
            }, 100);
        }, 500);
    } else {
        passwordHint.textContent = "Try again... think about what we share ❤️";
        passwordInput.value = '';
        passwordInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 500);
    }
}

// Shake animation for wrong password
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Background Music
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const mainWebsite = document.getElementById('mainWebsite');

let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        bgMusic.play();
        musicToggle.classList.add('playing');
        isMusicPlaying = true;
    }
});

// Scroll Animations
function startScrollAnimations() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// Surprise Button - Love Letter
document.addEventListener('DOMContentLoaded', function() {
    const surpriseButton = document.getElementById('surpriseButton');
    const letterModal = document.getElementById('letterModal');
    const easterEggHint = document.getElementById('easterEggHint');
    const closeModal = document.getElementById('closeModal');

    let clickCount = 0;

    // Button click handler
    if (surpriseButton) {
        surpriseButton.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Button clicked! Opening love letter...');
            clickCount++;
            
            // Open the modal
            if (letterModal) {
                letterModal.style.display = 'flex';
                letterModal.classList.add('show');
                console.log('Modal opened!');
            }
            
            // Easter egg
            if (clickCount === 5 && easterEggHint) {
                easterEggHint.textContent = "✨ You found the secret! You really remember that day! ✨";
                easterEggHint.classList.add('visible');
            }
            
            return false;
        };
    }

    // Close button handler
    if (closeModal) {
        closeModal.onclick = function() {
            if (letterModal) {
                letterModal.style.display = 'none';
                letterModal.classList.remove('show');
            }
        };
    }

    // Click outside to close
    if (letterModal) {
        letterModal.onclick = function(e) {
            if (e.target === letterModal) {
                letterModal.style.display = 'none';
                letterModal.classList.remove('show');
            }
        };
    }
});

// Heartbeat Animation for Body
let heartbeatInterval;

function startHeartbeat() {
    heartbeatInterval = setInterval(() => {
        document.body.style.animation = 'heartbeat 0.3s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 300);
    }, 2000);
}

// Add heartbeat animation style
const heartbeatStyle = document.createElement('style');
heartbeatStyle.textContent = `
    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.005); }
    }
`;
document.head.appendChild(heartbeatStyle);

// Start heartbeat when main website is visible
setTimeout(() => {
    if (mainWebsite.classList.contains('visible')) {
        startHeartbeat();
    }
}, 5000);

// Rose Petals Falling Effect
function createRosePetals() {
    setInterval(() => {
        const petal = document.createElement('div');
        petal.textContent = '🌹';
        petal.style.position = 'fixed';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top = '-50px';
        petal.style.fontSize = (Math.random() * 15 + 20) + 'px';
        petal.style.opacity = Math.random() * 0.5 + 0.5;
        petal.style.pointerEvents = 'none';
        petal.style.zIndex = '999';
        petal.style.animation = `petalFall ${Math.random() * 3 + 5}s linear forwards`;
        
        document.body.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 8000);
    }, 800);
}

// Add petal animation
const petalStyle = document.createElement('style');
petalStyle.textContent = `
    @keyframes petalFall {
        0% {
            transform: translateY(0) rotate(0deg) translateX(0);
        }
        25% {
            transform: translateY(25vh) rotate(90deg) translateX(20px);
        }
        50% {
            transform: translateY(50vh) rotate(180deg) translateX(-20px);
        }
        75% {
            transform: translateY(75vh) rotate(270deg) translateX(20px);
        }
        100% {
            transform: translateY(100vh) rotate(360deg) translateX(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(petalStyle);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mouse Sparkle Effect
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        const symbols = ['✨', '💕', '💖', '🌹'];
        const sparkle = document.createElement('div');
        sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = (Math.random() * 10 + 12) + 'px';
        sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
        sparkle.style.zIndex = '9999';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }
});

// Sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.5);
        }
    }
`;
document.head.appendChild(sparkleStyle);
