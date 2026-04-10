/* =========================================
   RKPS MASTER SCRIPT (NAVY & GOLD THEME)
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Logic ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-item');

    if (hamburger && mobileMenu) {
        function toggleMenu() {
            mobileMenu.classList.toggle('active');
            
            // Animate Hamburger to 'X'
            const bars = hamburger.querySelectorAll('span');
            if(mobileMenu.classList.contains('active')){
                bars[0].style.transform = 'translateY(9px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-9px) rotate(-45deg)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        }

        hamburger.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(mobileMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }

});

// --- Video Lightbox Logic ---
function openVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const youtubePlayer = document.getElementById('youtubePlayer');
    if (videoModal && youtubePlayer) {
        youtubePlayer.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; 
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
}

function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const youtubePlayer = document.getElementById('youtubePlayer');
    if (videoModal && youtubePlayer) {
        videoModal.classList.remove('active');
        youtubePlayer.src = ""; 
        document.body.style.overflow = 'auto'; 
    }
}
