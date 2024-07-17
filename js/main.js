document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const profileImage = document.querySelector('.profile-image');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Toggle visibility of profile image based on menu state
        if (navLinks.classList.contains('active')) {
            profileImage.style.display = 'none'; // Hide profile image
        } else {
            profileImage.style.display = 'block'; // Show profile image
        }

        // Adjust scroll position when menu is toggled on smaller screens
        if (navLinks.classList.contains('active')) {
            // Calculate the position to scroll to
            const mainOffsetTop = document.querySelector('main').offsetTop;
            const headerHeight = document.querySelector('header').offsetHeight;
            const scrollToPosition = mainOffsetTop - headerHeight;

            // Scroll to the calculated position smoothly
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    });
});
