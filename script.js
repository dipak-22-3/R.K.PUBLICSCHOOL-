/* =========================================
   RK Public School - Interactivity Script
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            // Toggle 'active' class on menu button (to animate into an 'X')
            mobileMenu.classList.toggle('active');
            // Toggle 'active' class on nav links (to slide menu in/out)
            navLinks.classList.toggle('active');
        });

        // 2. Auto-close Menu when a link is clicked
        const links = document.querySelectorAll('.nav-links li a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Remove 'active' class to close the menu
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. Smooth Scrolling Logic for any internal page links (e.g., #section)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Only apply if the link is an actual ID and not just "#"
            if (targetId !== "#" && targetId !== "") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 4. Subtle Navbar Shadow on Scroll (Peak Detailing for UI)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        }
    });
});
