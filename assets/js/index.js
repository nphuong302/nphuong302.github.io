// Get all buttons with class "services_button"
const buttons = document.querySelectorAll('.services_button');

// Loop through each button and add a click event listener
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Get the corresponding modal based on the index
        const modal = document.querySelector(`#modal${index + 1}`);

        // Show the modal if found
        if (modal) {
            modal.classList.add('active-modal');
        }
    });
});

// Get all elements with class "services_modal-close"
const closeButtons = document.querySelectorAll('.services_modal-close');

// Loop through each close button and add a click event listener
closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener('click', () => {
        // Get the corresponding modal based on the index
        const modal = document.querySelector(`#modal${index + 1}`);

        // Close the modal if found
        if (modal) {
            modal.classList.remove('active-modal');
        }
    });
});
