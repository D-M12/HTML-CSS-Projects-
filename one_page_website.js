// Get all the images in the gallery
const images = document.querySelectorAll('.gallery-item');

// Create a modal element
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

// Create an image element to display in the modal
const modalImage = document.createElement('img');
modal.appendChild(modalImage);

// Add an event listener to each image in the gallery
images.forEach(image => {
    image.addEventListener('click', () => {
        // When an image is clicked, display it in the modal
        modal.style.display = 'block';
        modalImage.src = image.src;
        modalImage.alt = image.alt;
    });
});

// Add an event listener to close the modal when clicked outside the image
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
