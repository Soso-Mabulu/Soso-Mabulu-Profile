// Navbar Js 
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuBar = document.querySelector('.menu-bar');

    menuToggle.addEventListener('click', function() {
        if (menuBar.style.display === "none" || menuBar.style.display === "") {
            menuBar.style.display = "flex";
        } else {
            menuBar.style.display = "none";
        }
    });
})

document.getElementById('active').addEventListener('change', function() {
    var profileImage = document.querySelector('.profile-image-container');
    if (this.checked) {
        profileImage.classList.add('hide-image');
    } else {
        profileImage.classList.remove('hide-image');
    }
});


// SKillset js
document.addEventListener("DOMContentLoaded", function() {
    const indicators = document.querySelectorAll('.indicator');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            document.querySelector('.indicator.active').classList.remove('active');
            indicator.classList.add('active');
            
            carouselItems.forEach(item => item.classList.remove('active'));
            carouselItems[index].classList.add('active');
            
            const offset = index * -100;
            carouselInner.style.transform = `translateX(${offset}%)`;
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const profileImage = document.querySelector('.profile-image');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            profileImage.style.display = 'none';
        } else {
            profileImage.style.display = 'block';
        }

        if (navLinks.classList.contains('active')) {
            const mainOffsetTop = document.querySelector('main').offsetTop;
            const headerHeight = document.querySelector('header').offsetHeight;
            const scrollToPosition = mainOffsetTop - headerHeight;
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    });
});

