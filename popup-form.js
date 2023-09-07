// popup-form.js

// Function to create and display the popup form
function displayPopupForm() {
    // Create a container for the popup
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';
  
    // Create an overlay to darken the background
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
  
    // Create the popup form and add it to the container
    const formContainer = document.createElement('div');
    formContainer.className = 'popup-form-container';
    formContainer.innerHTML = `
      <div class="popup-header">
 
        <button class="close-button" onclick="closePopupForm()">Close</button>
      </div>
      <iframe height="390px" src="https://popup-form-beta.vercel.app" frameborder="0"></iframe>
    `;
  
    // Append the overlay and form container to the document
    popupContainer.appendChild(overlay);
    popupContainer.appendChild(formContainer);
  
    // Append the popup container to the body
    document.body.appendChild(popupContainer);
  }
  
  // Function to close the popup form
  function closePopupForm() {
    const popupContainer = document.querySelector('.popup-container');
    if (popupContainer) {
      document.body.removeChild(popupContainer);
    }
  }
  