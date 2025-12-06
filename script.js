// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// --- SPA ROUTER LOGIC ---
function navigateTo(pageId) {
    // 1. Hide all pages
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // 3. Close Mobile Menu
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        isMenuOpen = false;
    }

    // 4. Close Desktop Dropdown
    const desktopServicesMenu = document.getElementById('desktop-services-menu');
    const dropdownIcon = document.getElementById('dropdown-icon');
    if (desktopServicesMenu) {
        // Toggle 'hidden' class back on to close it
        desktopServicesMenu.classList.add('hidden');
        desktopServicesMenu.classList.remove('show');
        if(dropdownIcon) dropdownIcon.style.transform = 'rotate(0deg)';
    }

    // 5. Scroll to top
    window.scrollTo(0, 0);

    // 6. Handle Header Style (Transparent on Home, Solid on others)
    const body = document.body;
    if (pageId === 'home-page') {
        body.classList.remove('header-solid-mode');
        // Trigger scroll handler to reset transparency if at top
        handleScroll();
    } else {
        body.classList.add('header-solid-mode');
    }
}

// --- NAVBAR SCROLL LOGIC ---
const navbar = document.getElementById('navbar');
const logoText = document.getElementById('logo-text');
const logoSubtext = document.getElementById('logo-subtext');
const navLinks = document.querySelectorAll('.nav-link');
const navCta = document.getElementById('nav-cta');
const menuIcon = document.getElementById('menu-icon');

function handleScroll() {
    // If we are NOT on home page, let the 'header-solid-mode' class handle styles.
    if (document.body.classList.contains('header-solid-mode')) return;

    if (!navbar) return;

    if (window.scrollY > 20) {
        // Scrolled State
        navbar.classList.remove('bg-transparent', 'border-transparent', 'py-4', 'md:py-6');
        navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'border-stone-200', 'py-2', 'md:py-3', 'shadow-sm', 'border-b', 'scrolled');
        
        if (logoText) {
            logoText.classList.remove('lg:text-white');
            logoText.classList.add('text-stone-900');
        }
        
        if (logoSubtext) {
            logoSubtext.classList.remove('lg:text-stone-200');
            logoSubtext.classList.add('text-bronze-600');
        }

        navLinks.forEach(link => {
            link.classList.remove('text-stone-200', 'hover:text-white');
            link.classList.add('text-stone-800', 'hover:text-stone-900');
        });

        if (navCta) {
            navCta.classList.remove('border-white', 'text-white', 'hover:bg-white', 'hover:text-stone-900');
            navCta.classList.add('border-stone-900', 'text-stone-900', 'hover:bg-stone-900', 'hover:text-white');
        }

        if (menuIcon) {
            menuIcon.classList.remove('lg:text-white');
        }
    } else {
        // Transparent State
        navbar.classList.add('bg-transparent', 'border-transparent', 'py-4', 'md:py-6');
        navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-stone-200', 'py-2', 'md:py-3', 'shadow-sm', 'border-b', 'scrolled');
        
        if (logoText) {
            logoText.classList.add('lg:text-white');
            logoText.classList.remove('text-stone-900');
        }
        
        if (logoSubtext) {
            logoSubtext.classList.add('lg:text-stone-200');
            logoSubtext.classList.remove('text-bronze-600');
        }

        navLinks.forEach(link => {
            link.classList.add('text-stone-200', 'hover:text-white');
            link.classList.remove('text-stone-800', 'hover:text-stone-900');
        });

        if (navCta) {
            navCta.classList.add('border-white', 'text-white', 'hover:bg-white', 'hover:text-stone-900');
            navCta.classList.remove('border-stone-900', 'text-stone-900', 'hover:bg-stone-900', 'hover:text-white');
        }

        if (menuIcon) {
            menuIcon.classList.add('lg:text-white');
        }
    }
}

window.addEventListener('scroll', handleScroll);
// Initial check
handleScroll();

// --- MOBILE MENU ---
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenu = document.getElementById('close-mobile-menu');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (mobileMenu) {
        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
        } else {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
        }
    }
}

if (mobileToggle) mobileToggle.addEventListener('click', toggleMenu);
if (closeMobileMenu) closeMobileMenu.addEventListener('click', toggleMenu);

// Mobile Dropdown Toggle
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        const content = e.currentTarget.nextElementSibling;
        content.classList.toggle('hidden');
    });
});


// --- DESKTOP DROPDOWN (CLICK) ---
const desktopServicesBtn = document.getElementById('desktop-services-btn');
const desktopServicesMenu = document.getElementById('desktop-services-menu');
const dropdownIcon = document.getElementById('dropdown-icon');

if (desktopServicesBtn && desktopServicesMenu) {
    desktopServicesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Check if it is currently hidden
        const isHidden = desktopServicesMenu.classList.contains('hidden');
        
        if (isHidden) {
            // SHOW IT
            desktopServicesMenu.classList.remove('hidden');
            desktopServicesMenu.classList.add('show'); // Logic for flex display if needed
            if(dropdownIcon) dropdownIcon.style.transform = 'rotate(180deg)';
        } else {
            // HIDE IT
            desktopServicesMenu.classList.add('hidden');
            desktopServicesMenu.classList.remove('show');
            if(dropdownIcon) dropdownIcon.style.transform = 'rotate(0deg)';
        }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!desktopServicesBtn.contains(e.target) && !desktopServicesMenu.contains(e.target)) {
             desktopServicesMenu.classList.add('hidden');
             desktopServicesMenu.classList.remove('show');
             if(dropdownIcon) dropdownIcon.style.transform = 'rotate(0deg)';
        }
    });
}


// --- LIGHTBOX ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

// Delegate click event for gallery items since they might be in any section
document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
        const src = item.getAttribute('data-src');
        if (src && lightbox) {
            lightboxImg.src = src;
            lightbox.classList.remove('hidden');
            document.body.classList.add('no-scroll');
        }
    }
});

function hideLightbox() {
    if (lightbox) {
        lightbox.classList.add('hidden');
        lightboxImg.src = '';
        document.body.classList.remove('no-scroll');
    }
}

if (closeLightbox) closeLightbox.addEventListener('click', hideLightbox);
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) hideLightbox();
    });
}


// --- FORM SUBMISSION ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry. A Martin Construction representative will contact you shortly.');
        contactForm.reset();
    });
}