/* =========================================
   RK Public School - Master Script
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PAGE PRELOADER LOGIC
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 600); 
        }, 800); 
    }

    // 2. SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll('.reveal');
    const revealFunction = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; 

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', revealFunction);
    revealFunction();

    // 3. TYPEWRITER EFFECT (Typed.js)
    if(document.getElementById('typed-text')){
        new Typed('#typed-text', {
            strings: ["Joyful Early Learning.", "Stress-Free Education.", "Building Strong Fundamentals.", "Play, Learn, and Grow."],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 1500,
            loop: true
        });
    }

    // 4. BUTTON RIPPLE EFFECT (Material Design)
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.classList.add('ripple');
            this.appendChild(ripples);
            
            setTimeout(() => { ripples.remove() }, 600);
        });
    });

    // 5. NUMBER COUNTER ANIMATION (For Stats Section)
    const counters = document.querySelectorAll('.counter');
    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / 200; // Speed of counting

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Use Intersection Observer to run counter ONLY when scrolled into view
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    // 6. MOBILE MENU LOGIC
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        const links = document.querySelectorAll('.nav-links li a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', (event) => {
            if (navLinks.classList.contains('active')) {
                if (!navLinks.contains(event.target) && !mobileMenu.contains(event.target)) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    }

    // 7. NAVBAR SHADOW & BACK-TO-TOP LOGIC
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.getElementById("backToTopBtn");
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if(navbar) navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
        } else {
            if(navbar) navbar.style.boxShadow = "none";
        }

        if (backToTopBtn) {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        }
    });
});

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
