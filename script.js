document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            themeToggleBtn.textContent = '🌙';
        } else {
            body.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        }
    });

    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'en';

    const translations = {
        tr: {
            nav_games: "Oyunlar",
            nav_about: "Hakkımda",
            hero_title: "Vantoryx Games'e Hoş Geldiniz",
            hero_desc: "Hız, hassasiyet ve çığır açan deneyimlerin buluşma noktası.",
            section_games: "Oyunlarımız",
            ram_desc: "RAM Survivor, hız ve hassasiyetin önemli olduğu, hızlı tempolu, retro tarzı bir arcade tıklama oyunudur. RAM'iniz %100'e ulaşmadan önce virüslü pencereleri kapatın. Para kazanın, donanımınızı yükseltin ve mümkün olduğunca uzun süre hayatta kalın.",
            oms_desc: "One More Step, hassas oynanışı çarpıcı görsel efektlerle birleştiren çığır açan bir 2D platform oyunu deneyimidir. Bu sadece bir platform oyunu değil; becerilerinizi son sınırlarına kadar zorlayacak ve sizi tekrar tekrar oynamaya teşvik edecek, özenle hazırlanmış bir meydan okuma!",
            btn_itchio: "itch.io'da İncele",
            section_about: "Hakkımda",
            about_p1: "Merhaba, ben <strong>Cengiz Kara</strong>. 17 yaşındayım ve bağımsız bir yazılım/oyun geliştiricisiyim.",
            about_p2: "Vantoryx Games çatısı altında oyuncuları zorlayan, retro dokunuşlara sahip ve eğlenceli mekanikler barındıran oyunlar geliştiriyorum. HTML, CSS ve JavaScript gibi web teknolojilerinin yanı sıra çeşitli oyun motorlarıyla projeler üretiyorum. Amacım, oynanışın her zaman ön planda olduğu unutulmaz deneyimler yaratmak.",
            footer: "© 2026 Vantoryx Games. Tüm hakları saklıdır."
        },
        en: {
            nav_games: "Games",
            nav_about: "About Me",
            hero_title: "Welcome to Vantoryx Games",
            hero_desc: "Where speed, precision, and groundbreaking experiences meet.",
            section_games: "Our Games",
            ram_desc: "RAM Survivor is a fast-paced, retro-style arcade clicker where speed and precision matter. Close infected windows before your RAM reaches 100%. Earn money, upgrade your hardware, and survive as long as possible.",
            oms_desc: "One More Step is a groundbreaking 2D platformer experience combining precise gameplay with stunning visual effects. It's not just a platformer; it's a carefully crafted challenge that will push your skills to the limit and keep you coming back!",
            btn_itchio: "View on itch.io",
            section_about: "About Me",
            about_p1: "Hello, I'm <strong>Cengiz Kara</strong>. I'm 17 years old and an independent software/game developer.",
            about_p2: "Under the roof of Vantoryx Games, I develop challenging games with retro touches and fun mechanics. I create projects using various game engines as well as web technologies like HTML, CSS, and JavaScript. My goal is to create unforgettable experiences where gameplay is always at the forefront.",
            footer: "© 2026 Vantoryx Games. All rights reserved."
        }
    };

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key]; 
            }
        });
    }

    langToggleBtn.addEventListener('click', () => {
        if (currentLang === 'en') {
            currentLang = 'tr';
            langToggleBtn.innerHTML = '🌐 EN';
            document.documentElement.lang = 'tr';
        } else {
            currentLang = 'en';
            langToggleBtn.innerHTML = '🌐 TR';
            document.documentElement.lang = 'en';
        }
        updateLanguage(currentLang);
    });
});
