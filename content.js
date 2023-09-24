// Function to create a pop-up box when hovering over a link
function createPopupBox(link,color) {
  // Create a div element for the pop-up box
  const popupBox = document.createElement('div');
  popupBox.className = 'popup';
  if (color == 3)
  {
    popupBox.textContent = 'This is a safe link!'; // You can customize the content
  }
  else if (color == 2)
  {
    popupBox.textContent = 'This may not be a safe link!'; // You can customize the content
  }
  else
  {
    popupBox.textContent = 'This is a dangerous link!'; // You can customize the content
  }

  // Position the pop-up box relative to the link
  const linkRect = link.getBoundingClientRect();
  popupBox.style.position = 'absolute';
  popupBox.style.left = linkRect.left + 'px';
  popupBox.style.top = linkRect.bottom + 'px';

  // Append the pop-up box to the document body
  document.body.appendChild(popupBox);

  // Remove the pop-up box when the mouse leaves the link
  link.addEventListener('mouseout', () => {
    document.body.removeChild(popupBox);
  });
}

// Function to change the color of all links to red and add pop-up boxes
function changeLinkColorAndAddPopup() {
  const links = document.querySelectorAll('a'); // Select all anchor elements

  // Loop through each link
  links.forEach(link => {
    // Change link color (as in your original function)
    const color = Math.floor(Math.random() * 3) + 1;
    if (color == 1)
      link.style.color = 'red';
    else if (color == 2)
      link.style.color = 'orange';
    else if (color == 3)
      link.style.color = 'green';

    // Add pop-up box on link hover
    link.addEventListener('mouseover', () => {
      createPopupBox(link,color);
    });
  });
}

// Call the function when the page has loaded
window.addEventListener('load', changeLinkColorAndAddPopup);
