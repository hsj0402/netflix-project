// Get the SVG element and the faqbox container
// Get all faqbox elements
const faqboxes = document.querySelectorAll('.faqbox');

// Loop through each faqbox and add click event listener
faqboxes.forEach(faqbox => {
    const toggleIcon = faqbox.querySelector('.toggle-icon');
    const dropdownContent = faqbox.querySelector('.dropdown-content');

    toggleIcon.addEventListener('click', () => {
        // Toggle the visibility of dropdown content
        dropdownContent.classList.toggle('active');

        // Toggle the 'expanded' state of the toggle icon
        toggleIcon.classList.toggle('expanded');

        // Change text content of toggle icon based on its state
        if (toggleIcon.classList.contains('expanded')) {
            toggleIcon.setAttribute('data-name', 'Minus');
        } else {
            toggleIcon.setAttribute('data-name', 'Plus');
        }
    });
});
