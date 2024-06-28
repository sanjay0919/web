document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown elements
    var dropdowns = document.querySelectorAll('.nav-item.dropdown');

    // Add event listeners for mouse enter and leave
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            dropdown.querySelector('.dropdown-menu').classList.add('show');
        });
        dropdown.addEventListener('mouseleave', function() {
            dropdown.querySelector('.dropdown-menu').classList.remove('show');
        });
    });
});

document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
