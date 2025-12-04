// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Logic
const navbar = document.getElementById('navbar');
const logoText = document.getElementById('logo-text');
const logoSubtext = document.getElementById('logo-subtext');
const navLinks = document.querySelectorAll('.nav-link');
const navCta = document.getElementById('nav-cta');
const menuIcon = document.getElementById('menu-icon');
const navUnderlines = document.querySelectorAll('.nav-underline');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Scrolled State
        navbar.classList.remove('bg-transparent', 'border-transparent', 'py-6');
        navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'border-stone-200', 'py-4', 'shadow-sm', 'border-b');
        
        logoText.classList.remove('lg:text-white');
        logoText.classList.add('text-stone-900');
        
        logoSubtext.classList.remove('lg:text-stone-200');
        logoSubtext.classList.add('text-bronze-600');

        navLinks.forEach(link => {
            link.classList.remove('text-stone-200', 'hover:text-white');
            link.classList.add('text-stone-800', 'hover:text-stone-900');
        });

        navUnderlines.forEach(line => {
            line.classList.remove('bg-white');
            line.classList.add('bg-bronze-600');
        });

        navCta.classList.remove('border-white', 'text-white', 'hover:bg-white', 'hover:text-stone-900');
        navCta.classList.add('border-stone-900', 'text-stone-900', 'hover:bg-stone-900', 'hover:text-white');

        menuIcon.classList.remove('lg:text-white');
    } else {
        // Transparent State
        navbar.classList.add('bg-transparent', 'border-transparent', 'py-6');
        navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-stone-200', 'py-4', 'shadow-sm', 'border-b');
        
        logoText.classList.add('lg:text-white');
        logoText.classList.remove('text-stone-900');
        
        logoSubtext.classList.add('lg:text-stone-200');
        logoSubtext.classList.remove('text-bronze-600');

        navLinks.forEach(link => {
            link.classList.add('text-stone-200', 'hover:text-white');
            link.classList.remove('text-stone-800', 'hover:text-stone-900');
        });

        navUnderlines.forEach(line => {
            line.classList.add('bg-white');
            line.classList.remove('bg-bronze-600');
        });

        navCta.classList.add('border-white', 'text-white', 'hover:bg-white', 'hover:text-stone-900');
        navCta.classList.remove('border-stone-900', 'text-stone-900', 'hover:bg-stone-900', 'hover:text-white');

        menuIcon.classList.add('lg:text-white');
    }
});

// Mobile Menu Logic
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        // Toggle icon visual if needed, currently reusing the menu icon
    } else {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
    }
}

if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMenu);
}

mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const src = item.getAttribute('data-src');
        if (src) {
            lightboxImg.src = src;
            lightbox.classList.remove('hidden');
            document.body.classList.add('no-scroll');
        }
    });
});

function hideLightbox() {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
    document.body.classList.remove('no-scroll');
}

if (closeLightbox) {
    closeLightbox.addEventListener('click', hideLightbox);
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });
}