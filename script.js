const themeBtn = document.getElementById('themeBtn');
const langBtn = document.getElementById('langBtn');
const elementsToTranslate = document.querySelectorAll('[data-en]');

let isDark = true;
let isEnglish = true;

themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    if(isDark) {
        document.body.classList.add('dark-theme');
        themeBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-theme');
        themeBtn.textContent = '🌙';
    }
});

langBtn.addEventListener('click', () => {
    isEnglish = !isEnglish;
    langBtn.textContent = isEnglish ? 'TR' : 'EN';
    
    elementsToTranslate.forEach(el => {
        if(isEnglish) {
            el.textContent = el.getAttribute('data-en');
        } else {
            el.textContent = el.getAttribute('data-tr');
        }
    });
});
