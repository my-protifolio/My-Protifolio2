function createFlowers() {
    const container = document.getElementById('flowersContainer');
    const flowerCount = 35; // عدد الورود في الشاشة

    // ورود جرافيك كاملة بتصميم ناعم ومختلف الأشكال
    const flowerSVGs = [
        // وردة 1: بنفسجي فاتح وبامبي (زي 🌸)
        `<svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="10" r="8" fill="#e9d5ff"/>
            <circle cx="30" cy="20" r="8" fill="#f472b6"/>
            <circle cx="20" cy="30" r="8" fill="#e9d5ff"/>
            <circle cx="10" cy="20" r="8" fill="#f472b6"/>
            <circle cx="20" cy="20" r="6" fill="#fde047"/>
        </svg>`,
        // وردة 2: وردي وزهر جرافيك (زي 🌺)
        `<svg viewBox="0 0 40 40" fill="none">
            <path d="M20 4 C15 14 25 14 20 4 Z" fill="#ec4899"/>
            <path d="M36 20 C26 15 26 25 36 20 Z" fill="#f472b6"/>
            <path d="M20 36 C25 26 15 26 20 36 Z" fill="#ec4899"/>
            <path d="M4 20 C14 25 14 15 4 20 Z" fill="#f472b6"/>
            <circle cx="20" cy="20" r="5" fill="#fef08a"/>
        </svg>`,
        // وردة 3: لافندر وأبيض شيك
        `<svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="8" r="7" fill="#c084fc"/>
            <circle cx="32" cy="20" r="7" fill="#f3e8ff"/>
            <circle cx="20" cy="32" r="7" fill="#c084fc"/>
            <circle cx="8" cy="20" r="7" fill="#f3e8ff"/>
            <circle cx="20" cy="20" r="5" fill="#fbbf24"/>
        </svg>`,
        // وردة 4: بينك ناعم وذهبي
        `<svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="6" r="6" fill="#f472b6"/>
            <circle cx="34" cy="20" r="6" fill="#f472b6"/>
            <circle cx="20" cy="34" r="6" fill="#f472b6"/>
            <circle cx="6" cy="20" r="6" fill="#f472b6"/>
            <circle cx="29" cy="11" r="6" fill="#fce7f3"/>
            <circle cx="11" cy="29" r="6" fill="#fce7f3"/>
            <circle cx="29" cy="29" r="6" fill="#fce7f3"/>
            <circle cx="11" cy="11" r="6" fill="#fce7f3"/>
            <circle cx="20" cy="20" r="5" fill="#fef08a"/>
        </svg>`
    ];

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'petal';

        // 1. اختيار وردة عشوائية بألوانها
        flower.innerHTML = flowerSVGs[Math.floor(Math.random() * flowerSVGs.length)];

        // 2. توزيع أفقي عشوائي
        flower.style.left = Math.random() * 100 + 'vw';

        // 3. أحجام الورد (بين 20px لـ 35px عشان يبقوا واضحين)
        const size = Math.random() * 15 + 20 + 'px';
        flower.style.width = size;
        flower.style.height = size;

        // 4. سرعة نزول مظبوطة (بين 5 لـ 9 ثواني)
        const duration = Math.random() * 4 + 5 + 's';
        flower.style.animationDuration = duration;

        // 5. متوزعين في الشاشة فوراً
        const delay = (Math.random() * -9) + 's';
        flower.style.animationDelay = delay;

        container.appendChild(flower);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFlowers);
} else {
    createFlowers();
}



// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند الضغط على أي رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}



// Dynamic Active Link on Scroll (ScrollSpy)
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // إذا كان الماوس واقف داخل حدود السكشن
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});

// Scroll Reveal Animation Script
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 120; // المسافة من أسفل الشاشة لبدء ظهور العنصر

    reveals.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// تشغيل الدالة مع السكرول وعند تحميل الصفحة
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);




// Power Switch TV Logic
const skillSwitch = document.getElementById('skillSwitch');
const tvScreen = document.getElementById('tvScreen');
const switchStatus = document.getElementById('switchStatus');

if (skillSwitch && tvScreen) {
    skillSwitch.addEventListener('change', () => {
        if (skillSwitch.checked) {
            tvScreen.classList.add('power-on');
            switchStatus.textContent = 'ON';
            switchStatus.style.color = '#22c55e';
        } else {
            tvScreen.classList.remove('power-on');
            switchStatus.textContent = 'OFF';
            switchStatus.style.color = '#ef4444';
        }
    });
}



// =========================================
// Projects Section Carousel & LocalStorage Logic
// =========================================
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const uploadInput = document.getElementById('uploadProjectImg');

let currentIndex = 0;

function getCardsPerView() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}

function updateCarousel() {
    const cards = document.querySelectorAll('.project-card');
    if (!cards.length || !track) return;
    
    const cardsPerView = getCardsPerView();
    const maxIndex = cards.length - cardsPerView;
    
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex > 0 ? maxIndex : 0;

    const cardWidth = cards[0].getBoundingClientRect().width + 20;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.project-card');
        if (currentIndex < cards.length - getCardsPerView()) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
}

window.addEventListener('resize', updateCarousel);

// Smooth Scroll Fix for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        if (targetId && targetId !== '#') {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

