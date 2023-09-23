// content.js

// Function to change the color of all links to red
function changeLinkColorToRed() {
  const links = document.querySelectorAll('a'); // Select all anchor elements

  // Loop through each link and change its color to red
  links.forEach(link => {
     link.style.color = 'red';
  });
}

// Call the function when the page has loaded
window.addEventListener('load', changeLinkColorToRed);
