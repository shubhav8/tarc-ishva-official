
// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    const icon = this.querySelector('[data-lucide]');
    if (mobileMenu.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('[data-lucide]');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Smooth scroll and active nav links
const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 72;
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Amenities Carousel
const amenitiesData = [
    {
        image: 'assets/images/img/amenities/jogging.webp',
        title: 'Jogging & Cycling Loops',
        description: 'Extended shaded pathways designed for smooth, uninterrupted jogging and cycling experiences every day.'
    },
    {
        image: 'assets/images/img/amenities/grove-walk.webp',
        title: 'Aromative Grove Walk',
        description: 'A calming aromatic trail surrounded by fragrant plantations that create a soothing sensory escape.'
    },
    {
        image: 'assets/images/img/amenities/reflexology.webp',
        title: 'Reflexology Path',
        description: 'A rejuvenating wellness walkway crafted with natural textures to stimulate relaxation and balance.'
    },
    {
        image: 'assets/images/img/amenities/waterbodies.webp',
        title: 'Cascading Waterbodies',
        description: 'Scenic water-lined pathways designed for peaceful strolls, conversations, and moments of calm.'
    },
    {
        image: 'assets/images/img/amenities/mandala.webp',
        title: 'Mandala Garden',
        description: 'A serene Vedic-inspired garden featuring geometric landscapes and vibrant planetary plantations.'
    },
    {
        image: 'assets/images/img/amenities/active-zone.webp',
        title: 'Active Sports Zone',
        description: 'Dedicated recreational spaces featuring pickleball and tennis courts for active lifestyle experiences.'
    },
    {
        image: 'assets/images/img/amenities/pool.webp',
        title: 'Swimming Pool',
        description: 'An expansive 40-metre lap pool enhanced with tranquil waterfalls and lush green surroundings.'
    }
];

let currentSlideIndex = 0;

function initCarousel() {
    const thumbnailsContainer = document.getElementById('carouselThumbnails');
    amenitiesData.forEach((amenity, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'carousel-thumbnail' + (index === 0 ? ' active' : '');
        thumbnail.onclick = () => goToSlide(index);
        thumbnail.innerHTML = `<img src="${amenity.image}" alt="${amenity.title}">`;
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) {
        currentSlideIndex = amenitiesData.length - 1;
    } else if (currentSlideIndex >= amenitiesData.length) {
        currentSlideIndex = 0;
    }
    updateCarousel();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const thumbnails = document.querySelectorAll('.carousel-thumbnail');
    const thumbnailsContainer = document.getElementById('carouselThumbnails');


    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlideIndex);
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === currentSlideIndex);
    });

    const activeThumbnail = thumbnails[currentSlideIndex];
    if (activeThumbnail && thumbnailsContainer) {
        const scrollLeft =
            activeThumbnail.offsetLeft
            - (thumbnailsContainer.clientWidth / 2)
            + (activeThumbnail.clientWidth / 2);

        thumbnailsContainer.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }

    document.getElementById('currentSlide').textContent = currentSlideIndex + 1;
}

// Initialize carousel on load
initCarousel();


// Modal functions
function openModal() {
    document.getElementById('leadFormModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('leadFormModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on background click
document.getElementById('leadFormModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Contact form submission
// function handleContactSubmit(e) {
//     e.preventDefault();
//     document.getElementById('contactFormContainer').classList.add('hidden');
//     document.getElementById('contactSuccessMessage').classList.remove('hidden');

//     setTimeout(() => {
//         document.getElementById('contactFormContainer').classList.remove('hidden');
//         document.getElementById('contactSuccessMessage').classList.add('hidden');
//         document.getElementById('contactForm').reset();
//     }, 3000);
// }

// Modal form submission
function handleModalSubmit(e) {
    e.preventDefault();
    document.getElementById('modalFormContainer').classList.add('hidden');
    document.getElementById('modalSuccessMessage').classList.remove('hidden');

    setTimeout(() => {
        closeModal();
        document.getElementById('modalFormContainer').classList.remove('hidden');
        document.getElementById('modalSuccessMessage').classList.add('hidden');
        document.querySelector('.modal-form').reset();
    }, 3000);
}

// WhatsApp Modal functions
function openWhatsAppModal() {
    document.getElementById('whatsappFormModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        lucide.createIcons();
    }, 50);
}

function closeWhatsAppModal() {
    document.getElementById('whatsappFormModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close WhatsApp modal on background click
document.getElementById('whatsappFormModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeWhatsAppModal();
    }
});

// WhatsApp form submission
function handleWhatsAppSubmit(e) {
    e.preventDefault();
    document.getElementById('whatsappFormContainer').classList.add('hidden');
    document.getElementById('whatsappSuccessMessage').classList.remove('hidden');

    setTimeout(() => {
        closeWhatsAppModal();
        document.getElementById('whatsappFormContainer').classList.remove('hidden');
        document.getElementById('whatsappSuccessMessage').classList.add('hidden');
        document.getElementById('whatsapp-name').value = '';
        document.getElementById('whatsapp-mobile').value = '';
        document.getElementById('whatsapp-email').value = '';
    }, 2000);
}

// Re-initialize icons after dynamic content
setTimeout(() => {
    lucide.createIcons();
}, 100);

function initTownshipCardCarousel() {
    const section = document.querySelector('.township-section');
    if (!section) {
        return;
    }

    const cards = Array.from(section.querySelectorAll('.quick-fact-card'));
    const dotsContainer = section.querySelector('.township-dots');
    const cardsContainer = section.querySelector('.township-cards');
    const durationMs = 5000;
    const mediaQuery = window.matchMedia ? window.matchMedia('(max-width: 1023px)') : null;

    if (cards.length === 0) {
        return;
    }

    let currentIndex = 0;
    let timerId = null;
    let dots = [];

    const isMobile = () => (mediaQuery ? mediaQuery.matches : window.innerWidth <= 1023);

    const buildDots = () => {
        if (!dotsContainer) {
            return;
        }

        const existingDots = Array.from(dotsContainer.querySelectorAll('.township-dot'));
        if (existingDots.length === cards.length) {
            dots = existingDots;
            bindDots();
            return;
        }

        dotsContainer.innerHTML = '';
        dots = cards.map(() => {
            const dot = document.createElement('span');
            dot.className = 'township-dot';
            dotsContainer.appendChild(dot);
            return dot;
        });

        bindDots();
    };

    const setActiveDot = (index) => {
        if (!dots.length) {
            return;
        }

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('is-active', dotIndex === index);
        });
    };

    const bindDots = () => {
        dots.forEach((dot, dotIndex) => {
            if (dot.dataset.bound === 'true') {
                return;
            }

            dot.dataset.bound = 'true';
            dot.setAttribute('role', 'button');
            dot.setAttribute('aria-label', `Show feature ${dotIndex + 1}`);
            dot.addEventListener('click', () => goToIndex(dotIndex));
        });
    };

    const resetProgressBar = (card) => {
        const bar = card.querySelector('.quick-fact-progress-bar');
        if (!bar) {
            return;
        }

        bar.style.transition = 'none';
        bar.style.transform = 'scaleX(0)';
    };

    const startProgressBar = (card) => {
        const bar = card.querySelector('.quick-fact-progress-bar');
        if (!bar) {
            return;
        }

        bar.style.transition = 'none';
        bar.style.transform = 'scaleX(0)';
        void bar.offsetWidth;
        bar.style.transition = `transform ${durationMs}ms linear`;
        bar.style.transform = 'scaleX(1)';
    };

    const setActiveCard = (index) => {
        const mobile = isMobile();

        cards.forEach((card, cardIndex) => {
            const isActive = mobile && cardIndex === index;
            card.classList.toggle('is-active', isActive);
            if (mobile) {
                if (isActive) {
                    startProgressBar(card);
                } else {
                    resetProgressBar(card);
                }
            } else {
                resetProgressBar(card);
            }
        });

        setActiveDot(index);
    };

    const scheduleNext = () => {
        clearTimeout(timerId);
        if (!isMobile()) {
            return;
        }

        timerId = window.setTimeout(() => {
            goToIndex(currentIndex + 1);
        }, durationMs);
    };

    const goToIndex = (index) => {
        currentIndex = (index + cards.length) % cards.length;
        setActiveCard(currentIndex);
        scheduleNext();
    };

    const bindNavButtons = () => {
        cards.forEach((card) => {
            const prevButton = card.querySelector('.card-nav-prev');
            const nextButton = card.querySelector('.card-nav-next');

            if (prevButton && !prevButton.dataset.bound) {
                prevButton.dataset.bound = 'true';
                prevButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    goToIndex(currentIndex - 1);
                });
            }

            if (nextButton && !nextButton.dataset.bound) {
                nextButton.dataset.bound = 'true';
                nextButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    goToIndex(currentIndex + 1);
                });
            }
        });
    };

    const bindSwipe = () => {
        if (!cardsContainer) {
            return;
        }

        const swipeThreshold = 50;
        let startX = 0;
        let startY = 0;

        cardsContainer.addEventListener('touchstart', (event) => {
            if (!isMobile()) {
                return;
            }
            const touch = event.changedTouches[0];
            startX = touch.clientX;
            startY = touch.clientY;
        }, { passive: true });

        cardsContainer.addEventListener('touchend', (event) => {
            if (!isMobile()) {
                return;
            }
            const touch = event.changedTouches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;

            if (Math.abs(deltaX) < swipeThreshold || Math.abs(deltaX) < Math.abs(deltaY)) {
                return;
            }

            if (deltaX < 0) {
                goToIndex(currentIndex + 1);
            } else {
                goToIndex(currentIndex - 1);
            }
        });
    };

    const handleMediaChange = () => {
        clearTimeout(timerId);
        if (isMobile()) {
            goToIndex(currentIndex);
        } else {
            cards.forEach((card) => card.classList.remove('is-active'));
            setActiveDot(currentIndex);
        }
    };

    buildDots();
    bindNavButtons();
    bindSwipe();
    handleMediaChange();

    if (mediaQuery) {
        mediaQuery.addEventListener('change', handleMediaChange);
    } else {
        window.addEventListener('resize', handleMediaChange);
    }
}

initTownshipCardCarousel();
