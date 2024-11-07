document.addEventListener('DOMContentLoaded', (loaded) => {
    // Requirement 1: Send a welcome message to the console
    console.log('Welcome to our JavaScript lesson');

    // Requirement 2: Add a new row of content to the main element
    // Create a new div to hold the content
    let newContentRow = document.createElement('div');
    
    // Requirement 3: Add an h element to the new row
    let newHeader = document.createElement('h3');
    newHeader.textContent = "This is the New Content Row!";
    newContentRow.appendChild(newHeader);
    
    // Requirement 3: Add a new paragraph element
    let newParagraph = document.createElement('p');
    newParagraph.textContent = "This paragraph describes how a new content row is added with JavaScript, allowing you to style and update the content dynamically";
    newContentRow.appendChild(newParagraph);
    
    // Requirement 3: Add an image element
    let newImage = document.createElement('img');
    newImage.src = './img/logo.png';  // Make sure to provide the correct path to the image
    newImage.alt = 'An example image for the new content';
    newImage.style.width = '200px'; // Adjust image size as needed
    newContentRow.appendChild(newImage);
 // Append the new content row to the main element
 document.querySelector('main').appendChild(newContentRow);

 // Requirement 4: Add some styling to the new content using JavaScript
 // Styling the new content row
 newContentRow.style.padding = '20px';
 newContentRow.style.marginTop = '20px';
 newContentRow.style.backgroundColor = '#e0f7fa';  // Light blue background for visibility
 
 // Styling the header
 newHeader.style.color = '#00796b';  // Dark green color for the header
 newHeader.style.fontSize = '24px';
 
 // Styling the paragraph
 newParagraph.style.color = '#004d40';  // Dark teal color for the paragraph
 newParagraph.style.fontSize = '16px';
 
 // Optional: Styling the image
 newImage.style.borderRadius = '10px';  // Rounded corners for the image
});