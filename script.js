document.addEventListener('DOMContentLoaded', () => {
    // Select all course detail headers
    const courseHeaders = document.querySelectorAll('.course-detail h3');

    courseHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle the module visibility
            const module = header.nextElementSibling; // Get the module related to the header
            module.classList.toggle('visible'); // Toggle the visibility class
        });
    });
});
