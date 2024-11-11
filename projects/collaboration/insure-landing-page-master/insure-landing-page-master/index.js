const menuHamburger = document.querySelector('.menu-icon');
const mobileOnly = document.querySelector('.mobile-only');

menuHamburger.addEventListener('click', () => {
    if (mobileOnly.style.display === 'flex') {
        mobileOnly.style.display = 'none';
    } else {
        mobileOnly.style.display = 'flex';
    }


    if (mobileOnly.classList.contains('show')) {
        // Start the transition, then hide after animation
        mobileOnly.classList.remove('show');
        setTimeout(() => {
            mobileOnly.style.display = 'none'; // Hide completely after animation
        }, 300); // Match with CSS transition duration
    } else {
        // Show element immediately, then start transition
        mobileOnly.style.display = 'block';
        setTimeout(() => {
            mobileOnly.classList.add('show');
        }, 10); // Small delay to apply the transition effect
    }
    
    console.log(mobileOnly);
} )