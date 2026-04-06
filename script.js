/* =========================================
   RK Public School - Master Script
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. PAGE PRELOADER LOGIC
    // =========================================
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Halka sa delay taaki animation properly dikhe (800ms)
        setTimeout(() => {
            preloader.style.opacity = '0';
            // Fade out hone ke baad display none kar do (600ms transition time)
            setTimeout(() => { 
                preloader.style.display = 'none'; 
            }, 600); 
        }, 800); 
    }

    // =========================================
    // 2. SCROLL REVEAL ANIMATION LOGIC
    // =========================================
    // Yeh website ko "Live" feel deta hai jab user scroll karta hai
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealFunction = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Jab element 100px visible ho jaye tab trigger hoga

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    // Scroll karne par animation check karo
    window.addEventListener('scroll', revealFunction);
    // Page load hote hi ek baar check karo (taaki upar ke elements dikh jayein)
    revealFunction();

    // =========================================
    // 3. MOBILE MENU (HAMBURGER) LOGIC
    // =========================================
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        // Hamburger icon par click karne par menu kholna/band karna
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Menu ke andar kisi link par click karne par menu band kar dena
        const links = document.querySelectorAll('.nav-links li a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // PRO FEATURE: Menu ke bahar click karne par menu band ho jaye
        document.addEventListener('click', (event) => {
            if (navLinks.classList.contains('active')) {
                // Check karo ki click menu ya hamburger button ke bahar hua hai
                if (!navLinks.contains(event.target) && !mobileMenu.contains(event.target)) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    }

    // =========================================
    // 4. NAVBAR SHADOW & BACK-TO-TOP BUTTON LOGIC
    // =========================================
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.getElementById("backToTopBtn");
    
    window.addEventListener('scroll', () => {
        // Thoda sa scroll karne par Navbar ke niche shadow add karna
        if (window.scrollY > 50) {
            if(navbar) navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
        } else {
            if(navbar) navbar.style.boxShadow = "none";
        }

        // Back to Top button ko 300px scroll ke baad dikhana
        if (backToTopBtn) {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        }
    });
});

// =========================================
// 5. BACK TO TOP FUNCTION
// =========================================
// Button par click karne par smoothly upar jana
function topFunction() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}
