document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navbar = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('show');
        });
    });

           if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    });