// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Simple form validation
document.querySelector("form").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if all fields are filled
    if (!name || !email || !message) {
        event.preventDefault();
        alert("Please fill in all fields before submitting the form.");
    } else {
        alert("Your message has been sent!");
    }
});
// Get all the gallery images
const images = document.querySelectorAll(".gallery img"); // Make sure the gallery has images with <img> tags
const modal = document.getElementById("modal"); // The modal container
const modalImage = document.getElementById("modal-image"); // The <img> element inside the modal
const closeBtn = document.getElementById("close-modal"); // The close button inside the modal

// When an image is clicked, show the modal
images.forEach((image) => {
    image.addEventListener("click", function () {
        modal.style.display = "flex"; // Show the modal (use flexbox for centering)
        modalImage.src = this.src; // Set the src of the modal image to the clicked image's src
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
    modal.style.display = "none"; // Hide the modal when the close button is clicked
});

// Optionally, close the modal when clicking outside the modal image
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        // If the user clicks outside the modal content (background)
        modal.style.display = "none"; // Close the modal
    }
});
