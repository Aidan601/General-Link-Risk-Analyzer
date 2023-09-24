const links = document.querySelectorAll('a');

const urlsToCheck = [];
links.forEach((link) => {
  const url = link.href;
  urlsToCheck.push({ link, url }); // Store both the link and URL in an object
});

const apiKey = 'AIzaSyBi5CsGvLUKIRuBufchW05k_Pr1Hl0OTMQ'; // Replace with your actual API key
const apiEndpoint = 'https://safebrowsing.googleapis.com/v4/threatMatches:find?key=' + apiKey;

// Loop through the URLs and send a request for each URL
urlsToCheck.forEach(({ link, urlToCheck }) => {
  const requestBody = {
    "client": {
      "clientId": "yourcompanyname",
      "clientVersion": "1.5.2"
    },
    "threatInfo": {
      "threatTypes": ["MALWARE", "SOCIAL_ENGINEERING"],
      "platformTypes": ["WINDOWS"],
      "threatEntryTypes": ["URL"],
      "threatEntries": [
        {"url": urlToCheck} // Each URL should be enclosed in an object
      ]
    }
  };

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response for each URL here
      console.log('API Response for URL:', urlToCheck, data);

      // Check if there are any matches in the response
      if (data.matches && data.matches.length > 0) {
        // Extract the threatType from the first match
        const threatType = data.matches[0].threatType;

        // Implement logic based on the threatType
        console.log(threatType);
        if (threatType === 'MALWARE') {
          // Handle malware threat type (e.g., apply red color)
          link.style.color = 'red';
        } else if (threatType === 'SOCIAL_ENGINEERING') {
          // Handle social engineering threat type (e.g., apply orange color)
          link.style.color = 'orange';
        } else {
          // Handle other threat types (e.g., apply yellow color)
          link.style.color = 'yellow';
        }   
      } else {
        // Handle the case where there are no matches (URL is safe)
        // You can apply a different style or action here
        link.style.color = 'green';
      }
    })
    .catch((error) => {
      console.error('Error for URL:', urlToCheck, error);
    });
});
