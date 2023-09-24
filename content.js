// content.js

// Function to change the color of all links to red
function changeLinkColorToRed() {
  const links = document.querySelectorAll('a'); // Select all anchor elements

  // Loop through each link and change its color to red
  links.forEach(link => {
    color = Math.floor(Math.random() * 3) + 1;
    if (color == 1)
      link.style.color = 'red';
    else if (color == 2)
      link.style.color = 'orange';
    else if (color == 3)
      link.style.color = 'green';
  });
}

// Call the function when the page has loaded
window.addEventListener('load', changeLinkColorToRed);
