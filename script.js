document.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const toggleButton = document.getElementById('toggleButton');
    const toggleContent = document.getElementById('toggleContent');
    const burgerMenu = document.querySelector('.burger-menu');
    const sidebar = document.querySelector('.sidebar');

    // Toggle button functionality
    toggleButton.addEventListener('click', () => {
        toggleContent.classList.toggle('hidden');
        
        if (toggleContent.classList.contains('hidden')) {
            toggleButton.textContent = 'Show Content';
        } else {
            toggleButton.textContent = 'Hide Content';
        }
    });

    // Burger menu functionality
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !burgerMenu.contains(e.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });
});