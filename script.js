document.addEventListener('DOMContentLoaded', () => {
    const DEFAULT_LANG = 'en';
    const DEFAULT_THEME = 'dark';

    const getStoredValue = (key, defaultValue) => localStorage.getItem(key) || defaultValue;
    const setStoredValue = (key, value) => localStorage.setItem(key, value);

    const themeToggleBtn = document.getElementById('theme-toggle');
    const langToggleBtn = document.getElementById('lang-toggle');
    const body = document.body;

    let currentLang = getStoredValue('userLanguage', DEFAULT_LANG);
    let currentTheme = getStoredValue('userTheme', DEFAULT_THEME);

    const translations = {
        tr: {
            nav_games: "Oyunları Keşfet",
            nav_about: "Geliştirici",
            lang_btn: "🌐 EN",
            hero_title: "Zorluk ve Hassasiyetin Buluştuğu Yer",
            hero_desc: "Becerilerinizi sonuna kadar zorlayan, el yapımı bağımsız deneyimleri keşfedin.",
            section_games: "Yaratımlarımız",
            ram_desc: "Hız ve hassasiyetin önemli olduğu, hızlı tempolu, retro tarzı bir arcade tıklama oyunu. RAM'iniz %100'e ulaşmadan önce virüslü pencereleri kapatın. Para kazanın, donanımınızı yükseltin ve mümkün olduğunca uzun süre hayatta kalın.",
            oms_desc: "Hassas oynanışı çarpıcı görsel efektlerle birleştiren çığır açan bir 2D platform oyunu deneyimi. Bu sadece bir platform oyunu değil; becerilerinizi son sınırlarına kadar zorlayacak ve sizi tekrar tekrar oynamaya teşvik edecek, özenle hazırlanmış bir meydan okuma!",
            btn_itchio: "itch.io'da İncele",
            section_about: "Yaratıcı Hakkında",
            about_p1: "Merhaba, ben <strong>Cengiz Kara</strong>, 17 yaşında, tutkulu, bağımsız bir yazılım ve oyun geliştiricisiyim.",
            about_p2: "Vantoryx Games çatısı altında, retro dokunuşlara sahip ve ilgi çekici mekanikler barındıran zorlu oyunlar geliştiriyorum. Unutulmaz deneyimler yaratmak için HTML, CSS, JavaScript ve özel oyun motorları gibi çeşitli araçlar kullanıyorum ve her zaman oynanışa odaklanıyorum.",
            footer: "© 2026 Vantoryx Games. Tüm hakları saklıdır. Cengiz Kara tarafından hazırlanmıştır."
        },
        en: {
            nav_games: "Explore Games",
            nav_about: "The Developer",
            lang_btn: "🌐 TR",
            hero_title: "Where Challenge Meets Precision",
            hero_desc: "Explore handcrafted indie experiences that push your skills to the limit.",
            section_games: "Our Creations",
            ram_desc: "A fast-paced, retro-style arcade clicker where speed and precision matter. Close infected windows before your RAM reaches 100%. Earn money, upgrade your hardware, and survive as long as possible.",
            oms_desc: "A groundbreaking 2D platformer experience combining precise gameplay with stunning visual effects. It's not just a platformer; it's a carefully crafted challenge that will push your skills to the limit and keep you coming back!",
            btn_itchio: "View on itch.io",
            section_about: "About the Creator",
            about_p1: "Hello, I'm <strong>Cengiz Kara</strong>, a 17-year-old passionate independent software and game developer.",
            about_p2: "Under the Vantoryx Games banner, I craft challenging games with retro touches and engaging mechanics. I leverage a variety of tools, including HTML, CSS, JavaScript, and specialized game engines, to create unforgettable experiences where gameplay is always the focus.",
            footer: "© 2026 Vantoryx Games. All rights reserved. Crafted by Cengiz Kara."
        }
    };

    const updatePageLanguage = (lang) => {
        document.documentElement.lang = lang;
        setStoredValue('userLanguage', lang);
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        langToggleBtn.querySelector('.btn-text').textContent = translations[lang]['lang_btn'];
    };

    const updatePageTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        setStoredValue('userTheme', theme);
        
        themeToggleBtn.querySelector('.btn-icon').textContent = (theme === 'dark' ? '☀️' : '🌙');
    };

    updatePageLanguage(currentLang);
    updatePageTheme(currentTheme);

    langToggleBtn.addEventListener('click', () => {
        currentLang = (currentLang === 'en' ? 'tr' : 'en');
        updatePageLanguage(currentLang);
    });

    themeToggleBtn.addEventListener('click', () => {
        currentTheme = (currentTheme === 'dark' ? 'light' : 'dark');
        updatePageTheme(currentTheme);
    });
});
