/* =========================================
   RK Public School - Master Script
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Page Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Halka sa delay taaki animation properly dikhe
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // Fade out transition ka time
        }, 800); 
    }

    // 2. Mobile Menu Toggle Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Auto-close Menu when a link is clicked
        const links = document.querySelectorAll('.nav-links li a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Pro Feature: Click outside to close the mobile menu
        document.addEventListener('click', (event) => {
            if (navLinks.classList.contains('active')) {
                if (!navLinks.contains(event.target) && !mobileMenu.contains(event.target)) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    }

    // 3. Subtle Navbar Shadow on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        }
    });

    // 4. Back to Top Button Visibility Logic
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });
    }
});

// 5. Back to Top Smooth Scroll Function
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
