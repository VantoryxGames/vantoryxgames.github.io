class ChristmasWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.createSnow();
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupSmoothScroll();
        this.setupConsoleGreeting();
    }

    createSnow() {
        const container = document.getElementById('snow-container');
        const snowflakes = ['❄', '❅', '❆', '•', '*'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => this.createSnowflake(container, snowflakes), i * 100);
        }
        
        setInterval(() => this.createSnowflake(container, snowflakes), 150);
    }

    createSnowflake(container, snowflakes) {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');
        flake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        
        const size = 10 + Math.random() * 25;
        const startX = Math.random() * window.innerWidth;
        const duration = 5 + Math.random() * 10;
        const delay = Math.random() * 5;
        
        flake.style.left = startX + 'px';
        flake.style.fontSize = size + 'px';
        flake.style.opacity = 0.5 + Math.random() * 0.5;
        flake.style.color = `rgba(255, 255, 255, ${0.7 + Math.random() * 0.3})`;
        
        const endX = startX + (Math.random() * 200 - 100);
        const endY = window.innerHeight + 50;
        
        flake.style.animation = `snowFall ${duration}s linear ${delay}s forwards`;
        
        if (!document.getElementById('snow-animation')) {
            const style = document.createElement('style');
            style.id = 'snow-animation';
            style.textContent = `
                @keyframes snowFall {
                    0% {
                        transform: translate(0, -10px) rotate(0deg);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translate(${endX - startX}px, ${endY}px) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        container.appendChild(flake);
        
        setTimeout(() => {
            if (flake.parentNode) flake.remove();
        }, (duration + delay) * 1000);
    }

    setupMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navList = document.querySelector('.nav-list');
        
        if (menuBtn && navList) {
            menuBtn.addEventListener('click', () => {
                navList.classList.toggle('active');
                menuBtn.innerHTML = navList.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : 
                    '<i class="fas fa-bars"></i>';
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navList.classList.remove('active');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navList) {
                navList.classList.remove('active');
                if (menuBtn) menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    setupScrollEffects() {
        const header = document.querySelector('.main-header');
        
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
    }

    setupAnimations() {
        const cards = document.querySelectorAll('.feature-card, .character-card, .platform-card, .connect-card, .about-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    card.style.zIndex = '';
                }, 300);
            });
        });

        const tree = document.querySelector('.christmas-tree');
        if (tree) {
            tree.addEventListener('click', () => {
                tree.style.animation = 'none';
                setTimeout(() => {
                    tree.style.animation = 'treeFloat 6s ease-in-out infinite';
                }, 10);
            });
        }
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            if (!anchor.hasAttribute('target')) {
                anchor.addEventListener('click', (e) => {
                    const targetId = anchor.getAttribute('href');
                    if (targetId === '#' || targetId.startsWith('http')) return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });
    }

    setupConsoleGreeting() {
        const greeting = `%c🎄 Merry Christmas from Vantoryx Games! 🎁%c%cMay your holidays be filled with adventure and joy!%cExplore Granty Dude Streets I this holiday season!`;
        const styles = [
            'color: #e63946; font-size: 18px; font-weight: bold;',
            '',
            'color: #2a9d8f; font-size: 14px;',
            'color: #f4a261; font-size: 14px; font-style: italic;'
        ];
        console.log(greeting, ...styles);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChristmasWebsite();
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    setTimeout(() => {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
});

window.addEventListener('resize', () => {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(flake => {
        const currentTop = parseInt(flake.style.top) || 0;
        if (currentTop > window.innerHeight) {
            flake.remove();
        }
    });
});
