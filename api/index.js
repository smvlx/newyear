const express = require('express');
const app = express();

// Array to store available links
let links = [
    'https://www.example.com/link1',
    'https://www.example.com/link2',
    'https://www.example.com/link3',
    'https://www.example.com/link4'
];

// Array to store used links
let usedLinks = [];

// Function to get a unique link
function getUniqueLink() {
    // Check if all links have been used
    if (links.length === 0) {
        return 'All links have been used';
    }

    // Select a random link from the available links
    let link = links[Math.floor(Math.random() * links.length)];

    // Check if the link has already been used
    if (usedLinks.indexOf(link) !== -1) {
        // Link has already been used, get a new link
        return getUniqueLink();
    }

    // Link has not been used, add it to the used links array
    usedLinks.push(link);

    // Remove the selected link from the available links array
    links.splice(links.indexOf(link), 1);

    return link;
}

// API endpoint to get a unique link
app.get('/get-link', (req, res) => {
    res.send({ link: getUniqueLink() });
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
