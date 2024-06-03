document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navbar = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });

    // Hide navbar when a link is clicked (for better UX)
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('show');
        });
    });

    // Optional: Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnToggleBtn = toggleBtn.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnToggleBtn && navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    });

    // Optional: Handle scroll to hide navbar on scroll down and show on scroll up
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            document.querySelector('header').style.top = '-60px'; // Header height
        } else {
            // Scrolling up
            document.querySelector('header').style.top = '0';
        }

        lastScrollTop = scrollTop;

        // Hide navbar if it's open while scrolling
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    });
});