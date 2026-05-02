// DOM Elements
const themeBtn = document.getElementById('themeBtn');
const langBtn = document.getElementById('langBtn');
const elementsToTranslate = document.querySelectorAll('[data-en]');
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// State
let isDark = true;
let isEnglish = true;

// Custom Cursor
if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 50);
    });

    // Hover effect on clickable elements
    const clickables = document.querySelectorAll('a, button, .play-btn, .action-btn, .cta-btn');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.background = 'transparent';
            cursor.style.border = '2px solid var(--accent)';
            cursorFollower.style.display = 'none';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.background = 'var(--accent)';
            cursor.style.border = 'none';
            cursorFollower.style.display = 'block';
        });
    });
}

// Theme Toggle
themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    
    if(isDark) {
        document.body.classList.add('dark-theme');
        themeBtn.querySelector('.btn-content').textContent = '☀️';
    } else {
        document.body.classList.remove('dark-theme');
        themeBtn.querySelector('.btn-content').textContent = '🌙';
    }
    
    // Button animation
    themeBtn.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeBtn.style.transform = 'scale(1)';
    }, 150);
});

// Language Toggle
langBtn.addEventListener('click', () => {
    isEnglish = !isEnglish;
    langBtn.querySelector('.btn-content').textContent = isEnglish ? 'TR' : 'EN';
    
    // Staggered text transition
    elementsToTranslate.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(10px)';
            el.style.filter = 'blur(5px)';
            
            setTimeout(() => {
                if(isEnglish) {
                    el.textContent = el.getAttribute('data-en');
                } else {
                    el.textContent = el.getAttribute('data-tr');
                }
                
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.filter = 'blur(0)';
            }, 200);
        }, index * 30);
    });
    
    // Button animation
    langBtn.style.transform = 'scale(0.9)';
    setTimeout(() => {
        langBtn.style.transform = 'scale(1)';
    }, 150);
});

// Add smooth transition to translatable elements
elementsToTranslate.forEach(el => {
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease, filter 0.3s ease';
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe game cards and about section
document.querySelectorAll('.game-card, .about-container').forEach(el => {
    observer.observe(el);
    el.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease, border-color 0.5s ease';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        navbar.style.padding = '15px 30px';
        navbar.style.background = isDark ? 'rgba(22, 22, 31, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.padding = '20px 40px';
        navbar.style.background = isDark ? 'rgba(22, 22, 31, 0.8)' : 'rgba(255, 255, 255, 0.8)';
    }
});

// Parallax effect for orbs
document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    
    document.querySelectorAll('.orb').forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        orb.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });
});

// Initialize animations on page load
window.addEventListener('load', () => {
    // Trigger initial animations for visible elements
    setTimeout(() => {
        document.querySelectorAll('.game-card, .about-container').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 500);
});

console.log('🚀 Vantoryx Games - Powered Up!');
console.log('💻 Crafted with precision by Cengiz Kara');
console.log('🎮 Ready to play?');
