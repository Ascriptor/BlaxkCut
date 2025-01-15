
// ---navbar---

let lastScrollTop = 0; // Keeps track of the last scroll position
const navbar = document.querySelector('.navbar'); // Navbar element

// Function to handle scroll behavior
window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY; // Current scroll position

    // 1. Transparent to solid on scroll
    if (currentScrollTop > 0) {
        navbar.classList.add('scrolled'); // Add solid black background
    } else {
        navbar.classList.remove('scrolled'); // Remove solid background
    }

    // 2. Show/hide navbar based on scroll direction
    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden'); // Hide navbar
    } else {
        // Scrolling up
        navbar.classList.remove('hidden'); // Show navbar
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll values
});





